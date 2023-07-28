import { ReactNode } from 'react';
import { Drawer } from '@mui/material';

type MobileNavigationDrawerProps = {
  children: ReactNode;
  open: boolean;
  toggleOpen: () => void;
};

export default function MobileNavigationDrawer({
  children,
  open,
  toggleOpen,
}: MobileNavigationDrawerProps) {
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={toggleOpen}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      {children}
    </Drawer>
  );
}
