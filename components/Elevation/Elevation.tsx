import { ReactNode } from 'react';
import Paper from '@mui/material/Paper';

export default function Elevation({ children }: { children: ReactNode }) {
  return (
    <Paper
      elevation={10}
      sx={{
        bgcolor: 'Background.paper',
        '&:hover': { boxShadow: 3 },
      }}
    >
      {children}
    </Paper>
  );
}
