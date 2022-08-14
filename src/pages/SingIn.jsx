import {CssVarsProvider} from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import {Button, TextField, Typography} from "@mui/joy";
import ModeToggle from "../components/ModeToggle";
import React from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import LoginAlert from "../components/LoginAlert";
import Link from "@mui/joy/Link";
import {Config as config} from "../config";
import UserService from "../services/UserService";

const SingIn = () => {
  const [usernameOrEmail, setUsernameOrEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [searchParams] = useSearchParams();
  const alreadyRegistered = searchParams.get("alreadyRegistered")
  const request = async () => {
    let response = await UserService.signin(usernameOrEmail, password)

    if (typeof response === 'object') {
      console.log(`Response received! Token: ${response.data}`)
    }
  }

  const enterKeyPressed = async (entry) => {
    if (entry.key === 'Enter') {
      await request()
    }
  }

  return (
    <div>
      <CssVarsProvider>
        <ModeToggle/>
        <Sheet
          sx={{
            maxWidth: 400,
            mx: 'auto',
            mt: 20,
            py: 3,
            px: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
        >
          <div>
            <Typography align={"center"} level={"h3"} component={"h1"}>Sign in</Typography>
            <TextField
              autoComplete={"off"}
              name={"email"}
              type={"email"}
              placeholder={"Username or Email"}
              style={{marginTop: "0.5em"}}
              onChange={(event) => setUsernameOrEmail(event.target.value)}
              onKeyDown={enterKeyPressed}
            />
            <TextField
              autoComplete={"off"}
              name={"password"}
              type={"password"}
              placeholder={"Password"}
              style={{marginTop: "0.5em"}}
              onChange={(event) => setPassword(event.target.value)}
              onKeyDown={enterKeyPressed}
            />
            <Button
              style={{marginTop: "0.5em"}}
              onClick={request}
            >
              Log in
            </Button>
            {!alreadyRegistered ?
              <Typography
                style={{marginTop: "1em"}}
                fontSize="sm"
                endDecorator={<Link href={`${config.appUrl}/signup`}>Sign up</Link>}
                sx={{alignSelf: 'center'}}
              >
                Don't have an account?
              </Typography> : <></>}
          </div>
        </Sheet>
      </CssVarsProvider>
    </div>
  );
}

export default SingIn;