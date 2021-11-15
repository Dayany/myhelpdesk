import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { logout } from "./APIUsers";

const Logout = () => {
  const history = useHistory();
  const handleLogout = () => {
    logout(history);
  };
  return (
    <>
      <Button onClick={() => handleLogout()}>Logout</Button>
    </>
  );
};

export default Logout;
