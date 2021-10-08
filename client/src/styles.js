import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {},
  spacing: {
    margin: "20px",
  },
  mainBox: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
}));

export default useStyles;
