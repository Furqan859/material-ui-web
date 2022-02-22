import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer,Avatar, Divider, List, ListItem, Tooltip, Paper, Button, ImageList } from '@mui/material';


 const NavBar =()=> {

    


      const [open, setOpen] = React.useState(false)
    
    
      const navAry = ['MENU', 'OPTIONS', 'ABOUT', 'CONTACT'];
    
    
    
      const handleClick = () => {
        setOpen(!open)
      }
    
      const drawer = (
        <div>
    
          <Divider />
          <List>
            {navAry.map((nav) => (
              <ListItem>
               <Button  sx={{backgroundColor:'blue'}}><Paper elevation={24} sx={{width:'200px',color:"green"}}> {nav}</Paper></Button>
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      )

  return (<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      title="Open settings"
      variant="h6"
      noWrap
      component="div"
      
      
      > 
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
            sx={{flexGrow:1,justifyContent:'flex-start',display:{xs:'flex', sm:'none',md:'none',lg:'none',xl:'none'}}}
           
          > 
            <MenuIcon />
          </IconButton>
<ImageList           sx={{justifyContent:'flex-start',display:{xs:'none', sm:'flex',md:'flex',lg:'flex',xl:'flex'}}}
>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsvxI-cGsF7dSoYBmfQ3ufH76ekG7d9FZTA&usqp=CAU" alt="image" height="50" width="50" />
          </ImageList>

          <Box variant="h6" component="div" sx={{ flexGrow: 1 ,display:'flex',justifyContent: 'center',display:{xs:'none', sm:'flex',md:'flex',lg:'flex',xl:'flex'}}} >
          <Typography >
            Options
          </Typography>
          <Typography sx={{mr:'65px',ml:'65px'}}>
          About
        </Typography>
        <Typography >Contact </Typography>
        
          </Box>
          
          <Tooltip title="Open settings" >
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
        
        </Toolbar>

        <Box
        component="nav"
        sx={{ width: { sm: 20 }, flexShrink: { sm: 0 } }} >
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleClick}
          sx={{
            display: { xs: 'flex', sm: 'flex' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 180},
          }}
        >
          {drawer}
        </Drawer>
       
      </Box>
      


      </AppBar>
     <div sx={{backgroundColor: 'red' ,height: '300px',width: '300px'}}>
     <Paper sx={{display:{xs:'none', sm:'flex',md:'flex',lg:'flex',xl:'flex'},backgroundColor:'black',height:'230px',width:'250px'}}>{drawer}</Paper>
     </div>
    </Box>
  );
}

export default NavBar;
