import {CssVarsProvider} from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import {Button, TextField, Typography} from "@mui/joy";
import ModeToggle from "../components/ModeToggle";
import React from "react";
import Link from "@mui/joy/Link";
import {api} from "../api";
import UserService from "../services/UserService";
import LoginAlert from "../components/LoginAlert";
import {useNavigate} from "react-router-dom";

const SingIn = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [signinError, setSigninError] = React.useState(false)
  const navigate = useNavigate()

  const request = async () => {
    let response = await UserService.signin(email, password)

    if (typeof response === 'object') {
      localStorage.setItem("@token", response.data)

      navigate("/todos")
    } else {
      setSigninError(true)
    }
  }
console.log()
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
              autoFocus={true}
              autoComplete={"off"}
              name={"email"}
              type={"email"}
              placeholder={"email"}
              style={{marginTop: "0.5em"}}
              onChange={(event) => setEmail(event.target.value)}
              onKeyDown={enterKeyPressed}
            />
            <TextField
              autoComplete={"off"}
              name={"password"}
              type={"password"}
              helperText={"Your password must be at least 6 characters"}
              placeholder={"password"}
              style={{marginTop: "0.5em"}}
              onChange={(event) => setPassword(event.target.value)}
              onKeyDown={enterKeyPressed}
            />
            <Button
              style={{marginTop: "1em"}}
              onClick={request}
            >
              Log in
            </Button>
            {!signinError ?
              <Typography
                style={{marginTop: "1em"}}
                fontSize="sm"
                endDecorator={<Link href={`${api.appUrl}/signup`}>Sign up</Link>}
                sx={{alignSelf: 'center'}}
              >
                Don't have an account?
              </Typography> : <Typography
                style={{marginTop: "1em"}}
                fontSize="sm"
                endDecorator={<Link href={`${api.appUrl}/signup`}>here</Link>}
                sx={{alignSelf: 'center'}}
              >
                If you want to create an account, just click
              </Typography>}
          </div>
        </Sheet>
      </CssVarsProvider>
      {
        signinError ? <LoginAlert message={
          `An error has occurred! Email or Password is incorrect.`
        }/> : <></>
      }
    </div>
  );
}

export default SingIn;