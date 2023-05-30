import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const MyBreadcrumbs = () => {
    const router = useRouter();
    const pathnames = router.asPath.split('/').filter(x => x);

    return(
      <Breadcrumbs
          aria-label="breadcrumb"
          separator="·"
          sx={{
            '& .MuiLink-root': {
              color: 'rgba(255,255,255,.72)',
              '&:hover': {
                color: '#fff',
              },
            },
            '& .MuiTypography-root': {
              color: 'rgba(255,255,255,.72)',
            },
            '& .MuiBreadcrumbs-separator': {
              color: 'rgba(255,255,255,.72)',
            },
          }}
        >
        <Link underline="none" color="inherit" href="/">
          Главная
        </Link>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
  
          return last ? (
            <Typography color="text.primary" key={to}>
              {value}
            </Typography>
          ) : (
            <Link underline="none" color="inherit" href={to} key={to}>
              {value}
            </Link>
          );
        })}
      </Breadcrumbs>
    )
}

export default MyBreadcrumbs;