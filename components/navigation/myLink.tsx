import NextLink from 'next/link';
import MuiLink from '@mui/material/Link';
import { Typography } from '@mui/material';
import React from 'react';

interface MyLinkProps {
  color?: string;
  link: string;
  content: React.ReactElement | string;
  fontSize?: string;
  fontWeight?: number;
  gradient?: boolean;
}

const MyLink = ({
  link,
  content,
  gradient,
  fontSize,
  fontWeight,
  color,
}: MyLinkProps) => {
  const isInternal = link.startsWith('/');

  if (!color) {
    color = 'rgba(255,255,255,.48)';
  }

  const linkStyles = gradient
    ? {
        backgroundImage: 'linear-gradient(-45deg,#c447ff,#ea003d)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textDecoration: 'none',
        fontSize,
        fontWeight,
      }
    : {
        color,
        transition: 'color 0.3s',
        textDecoration: 'none',
        fontSize,
        fontWeight,
        '&:hover': {
          color: '#fff',
        },
      };

/*   const LinkContent = (
    <MuiLink sx={linkStyles}>{content}</MuiLink>
  ); */

  return isInternal ? (
    <NextLink href={link} passHref>
      <Typography sx={linkStyles}>
        {content}
      </Typography> 
    </NextLink>
  ) : (
    <MuiLink href={link} sx={linkStyles}>
      {content}
    </MuiLink>
  );
};

export default MyLink;
