import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import BookmarksRoundedIcon from "@mui/icons-material/BookmarksRounded";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";

const SideBar = () => {
  //initiallize useSlelctor
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Box
      bgcolor=""
      flex={1}
      p={2}
      sx={{ display: { sm: "flex", md: "block", xs: "none" } }}
    >
      <List>
        <ListItem>
          <ListItemButton
            component={Link}
            to="/"
            selected={isActive("/")}
            sx={{ backgroundColor: isActive("/") ? "#46c4bd" : "transparent" }}
          >
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            component={Link}
            to="/search"
            selected={isActive("/search")}
            sx={{
              backgroundColor: isActive("/search") ? "#46c4bd" : "transparent",
            }}
          >
            <ListItemIcon>
              <SearchRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            component={Link}
            to="/favorites"
            selected={isActive("/favorites")}
            sx={{
              backgroundColor: isActive("/favorites")
                ? "#46c4bd"
                : "transparent",
            }}
          >
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            component={Link}
            to="/profile"
            selected={isActive("/profile")}
            sx={{
              backgroundColor: isActive("/profile") ? "#46c4bd" : "transparent",
            }}
          >
            <ListItemIcon>
              {currentUser && currentUser.profileimage ? (
                <Avatar
                  alt="Profile"
                  src={currentUser.profileimage}
                  sx={{ width: 30, height: 30 }}
                />
              ) : (
                <AccountCircleRoundedIcon />
              )}
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            component={Link}
            to="/booked"
            selected={isActive("/booked")}
            sx={{
              backgroundColor: isActive("/booked") ? "#46c4bd" : "transparent",
            }}
          >
            <ListItemIcon>
              <BookmarksRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Booked" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;