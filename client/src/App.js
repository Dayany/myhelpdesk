import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import { Toolbar, Typography } from "@mui/material";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline />
      <MuiAppBar position="relative" />
      <Toolbar>
        <Typography variant="h6">My Help Desk</Typography>
      </Toolbar>
      <main>
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
