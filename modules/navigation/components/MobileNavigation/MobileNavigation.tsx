'use client';

import { useState } from 'react';

import MobileNavigationBar from './Bar';
import MobileNavigationDrawer from './Drawer';
import NavigationLinks from '../NavigationLinks/NavigationLinks';

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <MobileNavigationBar toggleOpen={toggleOpen} />
      <MobileNavigationDrawer open={open} toggleOpen={toggleOpen}>
        <NavigationLinks />
      </MobileNavigationDrawer>
    </>
  );
}
