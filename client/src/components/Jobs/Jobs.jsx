import { Grid, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { STATUS } from "../../constants";
import AddJobs from "./AddJobs";
import { getJobs } from "./APIJobs";

const Jobs = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  useEffect(() => {
    getJobs();
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
          Jobs
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <AddJobs />
      </Grid>
      <Grid item xs={12}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Job Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Status:</TableCell>
              <TableCell>Equipment:</TableCell>
              <TableCell>Created By:</TableCell>
              <TableCell>Assigned to:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs?.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.departmentName}</TableCell>
                <TableCell>{STATUS[row.status]}</TableCell>
                <TableCell>{row.equipmentName}</TableCell>
                <TableCell>{row.createdByName}</TableCell>
                <TableCell>{row.assignedToName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default Jobs;
