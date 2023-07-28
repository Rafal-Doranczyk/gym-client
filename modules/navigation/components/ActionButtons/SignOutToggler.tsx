import { signOut } from 'next-auth/react';

import { TooltipIconButton } from '@/components';
import { APP_ROUTES } from '@/consts';

export default function SignOutToggler() {
  return (
    <TooltipIconButton
      variant="logout"
      onClick={() => signOut({ callbackUrl: APP_ROUTES.SIGNIN_PAGE_PATH })}
    />
  );
}
