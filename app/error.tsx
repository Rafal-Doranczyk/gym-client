'use client';

import Link from 'next/link';
import { useContext, useEffect } from 'react';

import { ToastContext } from '@/providers';

type ErrorProps = {
  error: {
    message?: string;
  };
};

export default function Error({ error }: ErrorProps) {
  const { handleOpen } = useContext(ToastContext);

  useEffect(() => {
    if (error?.message) {
      handleOpen({ message: error.message, severity: 'error' });
    }
  }, []);

  return (
    <div>
      <h1>Global error</h1>

      <Link href="/">Go to login</Link>
    </div>
  );
}
