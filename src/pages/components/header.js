import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import { Redirect } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';

import RevaLogo1 from './reva_logo.svg'; 
import vLogo1 from './vayuvyastra_logo_name.png';

const pages = [{name:'VAYUVYASTRA', link:'/vayuvyastra'},{name: 'PROJECTS'},{name: 'TIMELINE'},{name: 'TEAM'},{name: 'SPONSORS'}]

const Header = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
    <div>
        <AppBar color="primary" position='static'>
        <Toolbar disableGutters>
        
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                color: 'white',
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => <Redirect to={pages.link} />}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>

          </Box>


        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, }}>
            <Box
                component="img"
                sx={{
                    height: 100,
                    width: 100,
                    maxHeight: { xs: 50, md: 70 },
                    maxWidth: { xs: 50, md: 70 },
                    display: { xs: 'none', md: 'flex' },
                    margin: { xs:2.5},
                    marginRight: { xs:0}
                }}
                alt="Reva logo"
                src={RevaLogo1}
                onClick={() => window.open('https://www.reva.edu.in/')}
            />
            <Box 
            component="svg"
                sx = {{
                    width : '10px',
                    height : '60px',
                    bgcolor : '#fff',
                    display: { xs: 'none', md: 'flex' },
                    margin: { xs: '23px'},
                    marginRight: { xs:0},
                    borderRadius: 0.5
                }}
            />
            <Link href="/" margin={2}>
            <Box
                component="img"
                sx={{
                    height: 354,
                    width: 1417,
                    maxHeight: { xs: 60, md: 75 },
                    maxWidth: { xs: 240, md: 297 },
                }}
                alt="Vayuvyastra Logo"
                src={vLogo1}
            />
            </Link>
        </Box>
          
           
        <Box sx = {{display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => <Redirect to={pages.link} />}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
        </Box>

          </Toolbar>
        </AppBar>
    </div>
    );
};

export default Header;