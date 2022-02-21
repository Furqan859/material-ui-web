import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  Container,
  Button,
  Tooltip,
  Avatar
} from '@mui/material';

function App() {
  return (
    <AppBar position="static">
      <Container >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            <IconButton
              size="large">

            </IconButton>
            <Menu
              id="menu-appbar"
              sx={{ display: { xs: 'none', md: 'flex' } }} >
          
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              Menu
            </Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              Options
            </Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              About
            </Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              Contact
            </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
};
export default App;
