import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/Users/Users";
import Sidebar from "./components/Sidebar/Sidebar";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import Departments from "./components/Departments/Departments";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, height: "100vh", overflow: "auto" }}
        >
          <Container maxWidth="lg" sx={{ mt: 12, mb: 12 }}>
            <main>
              <Router>
                <Switch>
                  <Route path="/" exact component={Main} />
                  <Route path="/users" component={Users} />
                  <Route path="/departments" component={Departments} />
                </Switch>
              </Router>
            </main>
          </Container>
        </Box>
      </Box>
    </Provider>
  );
}

export default App;
