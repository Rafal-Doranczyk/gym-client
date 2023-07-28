import NextLink from 'next/link';
import { SxProps } from '@mui/material';
import Link from '@mui/material/Link';

type LinkProps = SxProps & {
  href: string;
  text: string;
};

export default function CustomLink({ href, text, ...sxProps }: LinkProps) {
  return (
    <Link href={href} component={NextLink} sx={{ ...sxProps, textDecoration: 'none' }}>
      {text}
    </Link>
  );
}
