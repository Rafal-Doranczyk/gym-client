import { Box, Stack } from '@mui/material';

import { Elevation } from '@/components';

import ButtonProviders from './ButtonProviders';

export default function AuthForm() {
  return (
    <Box
      position="absolute"
      top="50%"
      left="50%"
      maxWidth="90%"
      sx={{
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Elevation>
        <Stack alignItems="center" justifyContent="center" spacing={2} p={10}>
          <ButtonProviders />
        </Stack>
      </Elevation>
    </Box>
  );
}
