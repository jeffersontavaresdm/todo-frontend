import {CssVarsProvider} from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import {Button, TextField, Typography} from "@mui/joy";
import Link from '@mui/joy/Link';
import ModeToggle from "../components/ModeToggle";
import config from "../config";
import React from 'react';
import makeKey from "../utils/MakeKey";

const SignUp = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [key, setKey] = React.useState(makeKey())

  const createUser = () => {
    return {
      key: key,
      username: name,
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
              name={"name"}
              placeholder={"name"}
              style={{marginTop: "2em"}}
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              name={"email"}
              type={"email"}
              placeholder={"email"}
              style={{marginTop: "0.5em"}}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              name={"password"}
              type={"password"}
              placeholder={"password"}
              style={{marginTop: "0.5em"}}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              style={{marginTop: "0.5em"}}
              onClick={() => {
                console.log(createUser())
                setKey(makeKey())
              }}
            >
              Confirm
            </Button>
            <Typography
              style={{marginTop: "0.5em"}}
              fontSize="sm"
              endDecorator={<Link href={`${config.appUrl}/signin`}>Sign in</Link>}
              sx={{alignSelf: 'center'}}
            >
              Already have an account?
            </Typography>
          </div>
        </Sheet>
      </CssVarsProvider>
    </div>
  );
}

export default SignUp;