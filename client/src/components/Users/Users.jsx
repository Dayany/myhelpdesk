import { Container, Grid, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUsers } from "./APIUsers";

const Users = () => {
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Users
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Current Users</Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Active?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.department}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.isActive ? "Yes" : "No"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default Users;
