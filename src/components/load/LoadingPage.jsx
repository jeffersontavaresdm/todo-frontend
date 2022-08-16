import React from "react";
import Box from "@mui/material/Box/Box";
import {Loading} from "./Loading";

export const LoadingPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 2,
        m: 2,
        bgcolor: 'background.paper',
        borderRadius: 1,
      }}
    >
      <Loading/>
    </Box>
  )
}