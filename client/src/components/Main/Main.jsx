import { Grid, Typography } from "@mui/material";

const Main = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Help Desk Dashboard
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
