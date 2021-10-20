import { Grid, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AddEquipments from "./AddEquipments";
import { getEquipments } from "./APIEquipments";

const Equipments = () => {
  const equipments = useSelector((state) => state.equipments.equipments);
  useEffect(() => {
    getEquipments();
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
          Equipments
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <AddEquipments />
      </Grid>
      <Grid item xs={12}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Equipment Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Owned By:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {equipments?.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.departmentName}</TableCell>
                <TableCell>{row.ownedByName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default Equipments;
