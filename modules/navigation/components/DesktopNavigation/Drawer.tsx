import { ReactNode, useContext } from 'react';
import { Box, Drawer, Typography } from '@mui/material';

import { UserContext } from '@/context';

export const DESKTOP_APP_NAVIGATION_DRAWER_WIDTH = '220px';

export default function DesktopNavigationDrawer({ children }: { children: ReactNode }) {
  const user = useContext(UserContext);

  return (
    <Drawer
      variant="permanent"
      sx={{
        '& .MuiDrawer-paper': { width: DESKTOP_APP_NAVIGATION_DRAWER_WIDTH },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="nowrap"
        justifyContent="center"
        height={64}
        pl={2}
        sx={{ cursor: 'default' }}
      >
        <Typography variant="button">{process.env.NEXT_PUBLIC_APP_NAME}</Typography>
        <Typography variant="caption">{user.username}</Typography>
      </Box>
      {children}
    </Drawer>
  );
}
