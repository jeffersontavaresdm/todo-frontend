import Box from "@mui/material/Box/Box";
import {CircularProgress} from "@mui/material";

export const Loading = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <CircularProgress/>
    </Box>
  );
};