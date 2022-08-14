import {Alert} from "@mui/material";
import React from "react";
import {Box} from "@mui/joy";

const LoginAlert = ({message}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight={"10vh"}
    >
      <Alert
        variant="filled"
        severity="error"
        style={{
          width: "100%",
          alignItems: "center",
          paddingLeft: "5em"
        }}
      >
        {message}
      </Alert>
    </Box>
  )
}

export default LoginAlert;