import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddDepartment from "./AddDepartment";

const Departments = () => {
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.departments.departments);
  const loadDepartments = (departments) => {
    dispatch({ type: "ADD_INITIAL_DEPARTMENTS", payload: departments });
  };
  useEffect(() => {
    async function fetchDepartments() {
      const response = await fetch(
        `${process.env.REACT_APP_API_SERVER}departments`
      );
      const json = await response.json();
      loadDepartments(json);
    }
    fetchDepartments();
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
