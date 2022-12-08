import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Badge, AccountCircle } from '@mui/icons-material';
import {IconButton} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from '@material-ui/core/Link';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NotifBar from './NotifBar'
import { Outlet } from "react-router-dom"
const drawerWidth = 200;

const iconsArray = [


]

const routes = [
	{
		name: "Dashboard",
		link: "/admin"
	},
	{
		name: "Members",
		link: "/admin/members"
	},
	{
		name: "Revenue",
		link: "/admin/revenue"
	}
]

export default function NavBar({children}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notifanchorEl, setNotifAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotifMenu = (event) => {
    setNotifAnchorEl(event.currentTarget);
  };

  const handleNotifClose = () => {
    setNotifAnchorEl(null);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
      	elevation={0}
        position="fixed"
        sx={{ bgcolor: "white", width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
           <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              onClick={handleNotifMenu}
              color="inherit"
            >
                <NotificationsIcon color="primary"/>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={handleMenu}
            >
              <AccountCircle color="primary"/>
            </IconButton>
             <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
              <NotifBar handleClose={handleNotifClose} anchorEl={notifanchorEl} />
            </Box>
        </Toolbar>
      </AppBar>
      
      <Drawer
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', height:'100%', zIndex:'-1' },
        }}
        style={{ zIndex: 1251 }}
        variant="permanent"
        anchor="left"
      >
      <Box 
        display="flex"
        height="100%"
        alignItems="center"
        justifyContent="center"
        marginRight="20px"
      >
        <Toolbar />
        <List>
          {routes.map((text, index) => (
            <ListItem flexdirection="column" component={Link} href={text.link} key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>

          ))}
        </List>
		</Box>
      </Drawer>
      
      <Box
        component="main"
        sx={{ width:'100%' ,flexFlow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
       {children}
      </Box>
    </Box>
  );
}