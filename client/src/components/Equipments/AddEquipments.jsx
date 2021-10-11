import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { generateUuid } from "../Helpers/Helpers";
import { createEquipments } from "./APIEquipments";
import { getDepartments } from "../Departments/APIDepartments";
import { useSelector } from "react-redux";
import { getUsers } from "../Users/APIUsers";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddEquipments() {
  const [open, setOpen] = useState(false);
  const [department, setDepartment] = useState("");
  const [ownedBy, setOwnedBy] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const departments = useSelector((state) => state.departments.departments);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    getDepartments();
    getUsers();
  }, []);

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };
  const handleChangeOwnedBy = (event) => {
    setOwnedBy(event.target.value);
  };

  const handleSubmit = (event) => {
    const ownedByName = users.filter((current) => {
      if (current.uuid === ownedBy) return current.name;
    })[0].name;
    const departmentName = departments.filter((current) => {
      if (current.uuid === department) return current.name;
    })[0].name;
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const equipment = {
      uuid: generateUuid(),
      name: data.get("name"),
      department,
      departmentName,
      ownedBy,
      ownedByName,
    };

    createEquipments(equipment);
    setOpen(false);
    setDepartment("");
    setOwnedBy("");
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Add Equipment
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            xs={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Typography spacing={2} variant="h6" xs={{ mb: 3 }}>
                  Add a new Equipment
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete=""
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Equipment Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                  <InputLabel id="select-department-user">
                    Department
                  </InputLabel>
                  <Select
                    labelId="select-department-user"
                    id="depart-user-select"
                    value={department}
                    label="Department"
                    onChange={handleChange}
                  >
                    {departments?.map((department) => {
                      return (
                        <MenuItem
                          value={department.uuid}
                          name={department.name}
                        >
                          {department.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                  <InputLabel id="owner-select">Owner</InputLabel>
                  <Select
                    labelId="select-owner"
                    id="owned-by-select"
                    value={ownedBy}
                    label="Department"
                    onChange={handleChangeOwnedBy}
                  >
                    {users?.map((user) => {
                      return (
                        <MenuItem value={user.uuid} name={user.name}>
                          {user.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
