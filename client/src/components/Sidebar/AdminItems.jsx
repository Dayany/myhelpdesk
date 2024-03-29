import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PeopleIcon from "@mui/icons-material/People";
import ComputerIcon from "@mui/icons-material/Computer";
import WorkIcon from "@mui/icons-material/Work";

const AdminItems = (
  <div>
    <ListItem button component="a" href="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component="a" href="/users">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem button component="a" href="/departments">
      <ListItemIcon>
        <AccountBalanceIcon />
      </ListItemIcon>
      <ListItemText primary="Departments" />
    </ListItem>
    <ListItem button component="a" href="/equipments">
      <ListItemIcon>
        <ComputerIcon />
      </ListItemIcon>
      <ListItemText primary="Equipments" />
    </ListItem>
    <ListItem button component="a" href="/jobs">
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Jobs" />
    </ListItem>
  </div>
);

export default AdminItems;
