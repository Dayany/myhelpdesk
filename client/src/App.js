import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/Users/Users";
import Sidebar from "./components/Sidebar/Sidebar";
import { Box } from "@mui/system";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar />
        <Box component="main" sx={classes.mainBox}>
          <main>
            <Router>
              <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/users" component={Users} />
              </Switch>
            </Router>
          </main>
        </Box>
      </Box>
    </>
  );
}

export default App;
