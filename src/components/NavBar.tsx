import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const NavBar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#252526' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Fira Code' }}>
          Vladimir Lukyanov
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
