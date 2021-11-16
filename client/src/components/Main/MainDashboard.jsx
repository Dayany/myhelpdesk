import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import DashboardJobs from "../Dashboard/DashboardJobs";
import Login from "../AuthUsers/Login";
import Logout from "../AuthUsers/Logout";

const MainDashboard = () => {
  const isLoggedIn = useSelector((state) => state.authUser.isLoggedIn);
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 3,
      }}
    >
      <Grid container spacing={3}>
        {isLoggedIn ? <DashboardJobs /> : <Login />}
        <Logout />
      </Grid>
    </Box>
  );
};

export default MainDashboard;
