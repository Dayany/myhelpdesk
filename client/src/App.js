import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
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
            <Main />
          </Container>
        </Box>
      </Box>
    </Provider>
  );
}

export default App;
