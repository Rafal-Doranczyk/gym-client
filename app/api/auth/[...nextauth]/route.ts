import NextAuth from 'next-auth/next';
import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { constants } from 'gym-shared';

import { APP_ROUTES } from '@/consts';

const URL = `${process.env.NEXT_PUBLIC_API_URL}${constants.ROUTES.AUTH}`;

async function refreshGoogleToken(refresh_token?: string) {
  if (!refresh_token) {
    throw new Error('No refresh token provided');
  }

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  const tokens = await response.json();

  if (!response.ok) throw tokens;

  return tokens;
}

export const authOptions: AuthOptions = {
  pages: {
    signIn: APP_ROUTES.SIGNIN_PAGE_PATH,
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    jwt: async ({ account, token }) => {
      if (account && account.id_token) {
        try {
          // Initial sign in request
          await fetch(URL, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              idToken: account.id_token,
            }),
          });

          // Sign in request to the Backend API

          token.access_token = account.id_token;
          token.refresh_token = account.refresh_token;
          token.expires_at = Math.floor(Date.now() / 1000 + (account.expires_in as number));

          return token;
        } catch (error) {
          return { ...token, error: 'NEXT_AUTH_TOKEN_ERROR' };
        }
      }

      return token;

      // if (token?.expires_at && Date.now() < token.expires_at * 1000) {
      //   // If the access token has not expired yet, return it
      //   return token;
      // } else {
      //   // If the access token has expired, try to refresh it

      //   const tokens = await refreshGoogleToken(token.refresh_token);

      //   return {
      //     ...token, // Keep the previous token properties
      //     access_token: tokens.access_token,
      //     expires_at: Math.floor(Date.now() / 1000 + tokens.expires_in!),
      //     // Fall back to old refresh token, but note that
      //     // many providers may only allow using a refresh token once.
      //     refresh_token: tokens.refresh_token ?? token.refresh_token,
      //   };
      // }
    },

    async session({ session, token: { access_token } }) {
      return {
        ...session,
        access_token,
      };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    access_token: string;
  }
}

declare module 'next-auth/jwt' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface JWT {
    access_token?: string;
    expires_at?: number;
    refresh_token?: string;
    error?: 'NEXT_AUTH_TOKEN_ERROR';
  }
}
