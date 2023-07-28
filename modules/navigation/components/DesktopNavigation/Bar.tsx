import { AppBar, Box, Toolbar } from '@mui/material';

import { DESKTOP_APP_NAVIGATION_DRAWER_WIDTH } from '../..';
import ActionButtons from '../ActionButtons/ActionButtons';

export default function DesktopNavigationBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'background.default',
        pl: { lg: DESKTOP_APP_NAVIGATION_DRAWER_WIDTH },
      }}
    >
      <Toolbar>
        <Box ml="auto"></Box>
        <ActionButtons />
      </Toolbar>
    </AppBar>
  );
}
