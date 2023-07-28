import { AppBar, Box, Toolbar } from '@mui/material';

import MobileDrawerToggler from './DrawerToggler';
import ActionButtons from '../ActionButtons/ActionButtons';

type MobileNavigationBarProps = {
  toggleOpen: () => void;
};

export default function MobileNavigationBar({ toggleOpen }: MobileNavigationBarProps) {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'background.default',
      }}
    >
      <Toolbar>
        <MobileDrawerToggler toggleOpen={toggleOpen} />
        <Box ml="auto"></Box>
        <ActionButtons />
      </Toolbar>
    </AppBar>
  );
}
