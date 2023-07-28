'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ListItemButton, ListItemIcon, Typography } from '@mui/material';

import { APP_ROUTES } from '@/consts';

type NavigationLinkElementProps = {
  id: string;
  to: string;
  icon: JSX.Element;
  text: string;
};

export default function NavigationLinkElement({ id, to, icon, text }: NavigationLinkElementProps) {
  const pathname = usePathname();

  const selected = to === APP_ROUTES.DASHBOARD_PAGE_PATH ? pathname === to : pathname.includes(to);

  return (
    <Link key={id} passHref href={to} style={{ textDecoration: 'none' }}>
      <ListItemButton selected={selected}>
        <ListItemIcon
          sx={{
            svg: {
              height: 20,
              color: ({ palette }) => (selected ? palette.primary.main : 'unset'),
            },
          }}
        >
          {icon}
        </ListItemIcon>
        <Typography variant="subtitle2" color={({ palette }) => palette.text.primary}>
          {text}
        </Typography>
      </ListItemButton>
    </Link>
  );
}
