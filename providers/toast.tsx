'use client';

import { ReactNode, createContext, useState } from 'react';
import { Alert, AlertColor, Snackbar, Stack } from '@mui/material';

type ToastData = {
  open: boolean;
  message: string;
  severity: AlertColor;
};

type HandleOpenToast = Omit<ToastData, 'open'>;

export const ToastContext = createContext({
  handleClose: () => {},
  handleOpen: (_: HandleOpenToast) => {},
});

export function ToastProvider({ children }: { children: ReactNode }) {
  const [{ open, message, severity }, setToast] = useState<ToastData>({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleClose = () => setToast(prev => ({ ...prev, open: false }));

  const handleOpen = ({ message, severity }: HandleOpenToast) =>
    setToast({ open: true, message, severity });

  return (
    <ToastContext.Provider value={{ handleClose, handleOpen }}>
      {children}
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert variant="filled" sx={{ width: '100%' }} onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
      </Stack>
    </ToastContext.Provider>
  );
}
