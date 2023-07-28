import { useContext } from 'react';
import { Typography } from '@mui/material';

import { UserContext } from '@/context';

export default function Page() {
  const user = useContext(UserContext);

  return (
    <div>
      <Typography>dashboard</Typography>
      <Typography>{user?.email}</Typography>
    </div>
  );
}
