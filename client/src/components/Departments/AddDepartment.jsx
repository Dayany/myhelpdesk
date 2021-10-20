import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import { createDepartment } from "./APIDepartments";

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

export default function AddDepartment() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const department = {
      name: data.get("departmentName"),
      city: data.get("city"),
      state: data.get("state"),
      country: data.get("country"),
    };

    createDepartment(department);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Add Department
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
                  Add a new department
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="departmentName"
                  name="departmentName"
                  required
                  fullWidth
                  id="departmentName"
                  label="Department Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="city"
                  name="city"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="state"
                  name="state"
                  required
                  fullWidth
                  id="state"
                  label="State"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="country"
                  name="country"
                  required
                  fullWidth
                  id="country"
                  label="Country"
                  autoFocus
                />
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
