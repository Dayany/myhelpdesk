const AppBar = () => {
  return (
    <MuiAppBar position="absolute">
      <Toolbar
        sx={{
          pl: "24px", // keep right padding when drawer closed
        }}
      >
        <Typography variant="h6">My Help Desk</Typography>
      </Toolbar>
    </MuiAppBar>
  );
};
export default AppBar;
