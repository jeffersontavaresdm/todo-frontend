import {CssVarsProvider} from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import {Button, TextField, Typography} from "@mui/joy";
import Link from '@mui/joy/Link';
import ModeToggle from "../components/ModeToggle";
import React from 'react';
import UserService from "../services/UserService";
import {useNavigate} from "react-router-dom";
import {Config as config} from "../config";
import keyGenerator from "../utils/keyGenerator";
import LoginAlert from "../components/LoginAlert";

const SignUp = () => {
  const [username, setUsername] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const navigate = useNavigate();
  const [signupError, setSignupError] = React.useState(false)

  const createUser = () => {
    return {
      key: keyGenerator(),
      username: username,
      email: email,
      password: password
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
            <Typography align={"center"} level={"h3"} component={"h1"}>Sign up</Typography>
            <TextField
              autoComplete={"off"}
              name={"name"}
              placeholder={"name"}
              style={{marginTop: "2em"}}
              onChange={(event) => setUsername(event.target.value)
              }
            />
            <TextField
              autoComplete={"off"}
              name={"email"}
              type={"email"}
              placeholder={"email"}
              style={{marginTop: "0.5em"}}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              autoComplete={"off"}
              name={"password"}
              type={"password"}
              placeholder={"password"}
              style={{marginTop: "0.5em"}}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              style={{marginTop: "0.5em"}}
              onClick={async () => {
                let user = createUser();
                let response = await UserService.signup(user);

                if (typeof response === 'object') {
                  navigate("/signin");
                } else {
                  setSignupError(true)
                }
              }}
            >
              Confirm
            </Button>
            {!signupError ? <Typography
              style={{marginTop: "1em"}}
              fontSize="sm"
              endDecorator={<Link href={`${config.appUrl}/signin`}>Sign in</Link>}
              sx={{alignSelf: 'center'}}
            >
              Already have an account?
            </Typography> : <Typography
              style={{marginTop: "1em"}}
              fontSize="sm"
              endDecorator={<Link href={`${config.appUrl}/signin`}>here</Link>}
              sx={{alignSelf: 'center'}}
            >
              To login click
            </Typography>}
          </div>
        </Sheet>
      </CssVarsProvider>
      {
        signupError ? <LoginAlert message={
          `An error has occurred! Please create an account or login.`
        }/> : <></>
      }
    </div>
  );
}

export default SignUp;