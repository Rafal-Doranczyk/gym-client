'use server';

import { getServerSession } from 'next-auth';
import {
  GetUserResponse,
  UpdateUserSettingsPayload,
  UpdateUserSettingsResponse,
  constants,
} from 'gym-shared';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const URL = `${process.env.NEXT_PUBLIC_API_URL}${constants.ROUTES.USER}`;
const tags = ['user'];

export async function fetchUser() {
  const session = await getServerSession(authOptions);
  const token = session?.access_token;

  try {
    const res = await fetch(URL, {
      method: 'GET',
      headers: { ...(token ? { Authorization: `Bearer ${token}` } : null) },
      next: { tags },
      cache: 'no-store',
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Something is wrong with the server');
    }

    const data = await res.json();

    return data as GetUserResponse;
  } catch (error) {
    throw new Error('Something is wrong with the server');
  }
}

export async function updateUserSettings(payload: UpdateUserSettingsPayload) {
  const session = await getServerSession(authOptions);

  const token = session?.access_token;

  try {
    const res = await fetch(URL, {
      method: 'PATCH',
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : null),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data: UpdateUserSettingsResponse = await res.json();

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error(data?.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Something is wrong with the server');
    }

    throw new Error('Something is wrong with the server');
  }
}
