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
import { createUser } from "./APIUsers";
import { getDepartments } from "../Departments/APIDepartments";
import { useSelector } from "react-redux";
import { ROLES } from "../../constants";

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

export default function AddUser() {
  const [open, setOpen] = useState(false);
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const departments = useSelector((state) => state.departments.departments);
  useEffect(() => {
    getDepartments();
  }, []);
  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };
  const handleSubmit = (event) => {
    const departmentName = departments.filter((current) => {
      if (current._id === department) return current.name;
    })[0].name;
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const user = {
      name: data.get("userFullName"),
      username: data.get("username"),
      password: data.get("password"),
      department,
      departmentName,
      role,
      isActive: data.get("isActive"),
    };

    createUser(user);
    setDepartment("");
    setRole("");
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Add User
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
                  Add a new user
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="username"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="password"
                  required
                  fullWidth
                  type="password"
                  id="password"
                  label="Password"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="userFullName"
                  name="userFullName"
                  required
                  fullWidth
                  id="userFullName"
                  label="User Full Name"
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
                        <MenuItem value={department._id}>
                          {department.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                  <InputLabel id="select-role">Role</InputLabel>
                  <Select
                    labelId="select-role"
                    id="role-select"
                    value={role}
                    label="Role"
                    onChange={handleChangeRole}
                  >
                    {ROLES.map((role, index) => {
                      return <MenuItem value={index}>{role}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormGroup>
                  <FormControlLabel
                    name="isActive"
                    control={<Checkbox defaultChecked />}
                    label="Is user active?"
                  />
                </FormGroup>
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
