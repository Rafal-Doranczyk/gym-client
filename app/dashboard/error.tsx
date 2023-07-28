'use client';

import { useContext, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import { ToastContext } from '@/providers';
import { Link } from '@/components';
import { ErrorPageProps } from '@/types';

export default function Error({ error }: ErrorPageProps) {
  const { handleOpen } = useContext(ToastContext);

  useEffect(() => {
    if (error?.message) {
      handleOpen({ message: error.message, severity: 'error' });
    }
  }, []);

  return (
    <Box py={3}>
      <Typography mb={1} textAlign="center" variant="h5">
        Global error
      </Typography>
      <Link href="/" text="Go to login" textAlign="center" display="block" />
    </Box>
  );
}
