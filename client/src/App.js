import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import { Toolbar, Typography } from "@mui/material";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <CssBaseline />
      <MuiAppBar position="relative" />
      <Toolbar>
        <Typography variant="h6">My Help Desk</Typography>
      </Toolbar>
      <main>
        <Main />
      </main>
    </>
  );
}

export default App;
