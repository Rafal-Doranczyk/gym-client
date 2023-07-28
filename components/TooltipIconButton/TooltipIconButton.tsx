import { cloneElement } from 'react';
import { Fade, IconButton, IconButtonProps, Tooltip } from '@mui/material';
import {
  Edit,
  Delete,
  AddCircle,
  Settings,
  ExitToApp,
  Brightness7,
  Brightness4,
  Save,
  MoreVert,
  Download,
  EditOff,
  Menu,
} from '@mui/icons-material';

type TooltipButtonType =
  | 'delete'
  | 'edit'
  | 'edit-off'
  | 'save'
  | 'create'
  | 'settings'
  | 'logout'
  | 'dark-mode'
  | 'light-mode'
  | 'menu'
  | 'download'
  | 'hamburger';

type IconsMapType = {
  [key in TooltipButtonType]: {
    icon: JSX.Element;
    text: string;
    color?: IconButtonProps['color'];
  };
};

const IconsMap: IconsMapType = {
  delete: {
    icon: <Delete />,
    color: 'error',
    text: 'Delete',
  },
  edit: {
    icon: <Edit />,
    text: 'Edit',
  },
  'edit-off': {
    icon: <EditOff />,
    text: 'Edit Off',
  },
  save: {
    icon: <Save />,
    text: 'Save',
  },
  create: {
    icon: <AddCircle />,
    text: 'Create',
  },
  settings: {
    icon: <Settings />,
    text: 'Settings',
  },
  logout: {
    icon: <ExitToApp />,
    text: 'Logout',
  },
  'light-mode': {
    icon: <Brightness7 />,
    text: 'Light Mode',
  },
  'dark-mode': {
    icon: <Brightness4 />,
    text: 'Dark Mode',
  },
  menu: {
    icon: <MoreVert />,
    text: 'Menu',
  },
  download: {
    icon: <Download />,
    text: 'Download',
  },
  hamburger: {
    icon: <Menu />,
    text: 'Menu',
  },
} as const;

type TooltipIconButtonProps = IconButtonProps & {
  variant: TooltipButtonType;
};

export default function TooltipIconButton({ variant, disabled, ...props }: TooltipIconButtonProps) {
  const { color, text, icon } = IconsMap[variant];

  return disabled ? (
    <IconButton disabled>{icon}</IconButton>
  ) : (
    <Tooltip arrow TransitionComponent={Fade} title={text}>
      <span>
        <IconButton color={color} {...props}>
          {cloneElement(icon, { fontSize: props.size })}
        </IconButton>
      </span>
    </Tooltip>
  );
}
