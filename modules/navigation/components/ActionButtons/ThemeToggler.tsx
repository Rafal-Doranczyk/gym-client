import { useContext, useTransition } from 'react';
import { enums } from 'gym-shared';

import { TooltipIconButton } from '@/components';
import { ToastContext, ThemeContext } from '@/providers';
import { updateUserSettings } from '@/actions';

export default function ThemeToggler() {
  const [pending, startTransition] = useTransition();
  const { mode, setMode } = useContext(ThemeContext);
  const { handleClose, handleOpen } = useContext(ToastContext);

  const isDarkMode = mode === 'dark';

  const changedPalette = isDarkMode ? enums.PALETTE_MODES.LIGHT : enums.PALETTE_MODES.DARK;

  return (
    <TooltipIconButton
      disabled={pending}
      variant={isDarkMode ? 'light-mode' : 'dark-mode'}
      onClick={() => {
        try {
          handleClose();
          setMode(changedPalette);

          startTransition(async () => {
            const { message } = await updateUserSettings({ palette: changedPalette });
            handleOpen({ message, severity: 'success' });
          });
        } catch (error) {
          handleOpen({ message: 'Something went wrong with theme update', severity: 'error' });
        }
      }}
    />
  );
}
