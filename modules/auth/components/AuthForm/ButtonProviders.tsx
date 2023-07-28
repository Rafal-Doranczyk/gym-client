'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@mui/material';
import { Google } from '@mui/icons-material';

import { APP_ROUTES } from '@/consts';

const providers = [{ icon: <Google />, name: 'google', text: 'Continue with Google' }] as const;

export default function ButtonProviders() {
  return (
    <>
      {providers.map(({ name, icon, text }) => (
        <Button
          key={name}
          type="submit"
          color="primary"
          size="large"
          variant="outlined"
          sx={{ width: 300 }}
          onClick={() => signIn('google', { callbackUrl: APP_ROUTES.DASHBOARD_PAGE_PATH })}
          startIcon={icon}
        >
          {text}
        </Button>
      ))}
    </>
  );
}
