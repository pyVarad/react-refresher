import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        bgcolor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        py: 2,
      }}
    >
      <Typography variant="body2">
        {'© '}
        {new Date().getFullYear()}{' '}
        <Link color="inherit" href="https://yourwebsite.com">
          Your Website
        </Link>
        {'. All rights reserved.'}
      </Typography>
    </Box>
  );
}