import React from "react";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PostAddRoundedIcon from "@material-ui/icons/PostAddRounded";
import PermContactCalendarRoundedIcon from "@material-ui/icons/PermContactCalendarRounded";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <Typography
            color="inherit"
            variant="subtitle1"
            component={Link}
            to="/"
          >
            Home <HomeRoundedIcon fontSize="small" />
          </Typography>
        </ListItemText>
        <ListItemText inset>
          <Typography
            color="inherit"
            variant="subtitle1"
            component={Link}
            to="/posts"
          >
            Posts <PostAddRoundedIcon fontSize="small" />
          </Typography>
        </ListItemText>
        <ListItemText inset>
          <Typography
            color="inherit"
            variant="subtitle1"
            component={Link}
            to="/contact-us"
          >
            Contact Us <PermContactCalendarRoundedIcon fontSize="small" />
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default Nav;
