import { Box } from '@mui/material';

import MobileNavigation from './MobileNavigation/MobileNavigation';
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';

// I can't use useMediaQuery hook here to detect what drawer to use cause it always returns false at first render
// https://github.com/mui/material-ui/pull/36056
// That's why I'm using two different components for mobile and desktop
export default function Navigation() {
  return (
    <>
      <Box
        display={{
          xs: 'block',
          lg: 'none',
        }}
      >
        <MobileNavigation />
      </Box>
      <Box
        display={{
          xs: 'none',
          lg: 'block',
        }}
      >
        <DesktopNavigation />
      </Box>
    </>
  );
}
