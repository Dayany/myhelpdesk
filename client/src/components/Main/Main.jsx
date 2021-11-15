import { Box, Grid } from "@mui/material";
import DashboardJobs from "../Dashboard/DashboardJobs";
import Login from "../Users/Login";
import Logout from "../Users/Logout";
import { useSelector } from "react-redux";

const Main = () => {
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

export default Main;
