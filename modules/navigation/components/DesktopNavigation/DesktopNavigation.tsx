import DesktopNavigationBar from './Bar';
import DesktopNavigationDrawer from './Drawer';
import NavigationLinks from '../NavigationLinks/NavigationLinks';

export default function DesktopNavigation() {
  return (
    <>
      <DesktopNavigationBar />
      <DesktopNavigationDrawer>
        <NavigationLinks />
      </DesktopNavigationDrawer>
    </>
  );
}
