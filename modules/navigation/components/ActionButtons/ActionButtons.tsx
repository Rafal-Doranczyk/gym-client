'use client';

import { useContext, useEffect } from 'react';

import { UserContext } from '@/context';
import { ThemeContext } from '@/providers';

import SignOutToggler from './SignOutToggler';
import ThemeToggler from './ThemeToggler';

export default function ActionButtons() {
  const { settings } = useContext(UserContext);
  const { setMode } = useContext(ThemeContext);

  useEffect(() => {
    setMode(settings.palette);
  }, []);

  return (
    <>
      <ThemeToggler />
      <SignOutToggler />
    </>
  );
}
