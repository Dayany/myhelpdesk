import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import useStyles from "../../styles";

const Main = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Help Desk Dashboard
        </Typography>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "50vh" }}
        >
          <Stack spacing={2} direction="row" className={classes.spacing}>
            <Grid item xs={6}>
              <Button href="/users" variant="contained">
                Users
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained">Departments</Button>
            </Grid>
          </Stack>
          <Stack spacing={2} direction="row" className={classes.spacing}>
            <Button variant="contained">Equipments</Button>
            <Button variant="contained">Jobs/Tasks</Button>
          </Stack>
        </Grid>
      </Container>
    </>
  );
};

export default Main;
