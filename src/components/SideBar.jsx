import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
import React from 'react'
import { Link } from 'react-router-dom';


 const SideBar = () => {
  return (
    <Box bgcolor="" flex={1} p={2} sx={{display: {sm: "flex", md: "block", xs: "none"}}}>
    <List>
    <ListItem disablePadding>
      <ListItemButton component={Link} to="/">
        <ListItemIcon>
          <HomeRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton component={Link} to="/search">
        <ListItemIcon>
          <SearchRoundedIcon/>
        </ListItemIcon>
        <ListItemText primary="Search" />
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton component={Link} to="/favorites">
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
        <ListItemText primary="Favorites" />
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton component={Link} to="/profile">
        <ListItemIcon>
          <AccountCircleRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton component={Link} to="/booked">
        <ListItemIcon>
          <BookmarksRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Booked" />
      </ListItemButton>
    </ListItem>
    </List>
    </Box>
  )
}

export default SideBar;
