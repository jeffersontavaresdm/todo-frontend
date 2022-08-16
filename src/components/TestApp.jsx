import UserService from "../services/UserService";
import React from "react";
import {Button, Paper, Typography} from "@mui/material";
import {Loading} from "./load/Loading";

const TestApp = () => {
  const [clicked, setClicked] = React.useState(false)
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    if (clicked) {
      (async () => setUsers(await UserService.list()))()
    }
  }, [clicked])

  return (
    <div style={{width: "100%", marginTop: "20%"}} align={"center"}>
      <Button
        style={{width: "10%"}}
        variant={"contained"}
        onClick={() => setClicked(!clicked)}>
        {clicked && users.body === undefined ? (<Loading/>) : (!clicked ? "CLICK" : "CLEAR")}
      </Button>
      {clicked && users.body !== undefined ?
        <Paper
          variant={"elevation"}
          sx={{width: "30%", backgroundColor: "darkcyan", pb: "1em", mt: "1em"}}
          elevation={10}
        > {
          users.body.map(user =>
            <Typography
              key={user.id}
              variant={"h5"}
              style={{marginTop: "0.5em", color: "white"}}
              fontSize="sm"
              sx={{alignSelf: 'center'}}
            >
              [{user.email}]
            </Typography>
          )}
        </Paper> : <></>}
    </div>
  )
}

export default TestApp;