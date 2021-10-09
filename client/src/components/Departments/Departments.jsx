import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import AddDepartment from "./AddDepartment";

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        `${process.env.REACT_APP_API_SERVER}departments`
      );
      const json = await response.json();
      setDepartments(json);
    }
    fetchUsers();
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
          Departments
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <AddDepartment />
      </Grid>
      <Grid item xs={12}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {departments?.map((row) => (
              <TableRow key={row.uuid}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default Departments;