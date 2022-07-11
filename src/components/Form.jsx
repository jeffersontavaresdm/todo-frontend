import {Button, Paper, TextField} from "@mui/material";
import React from 'react';

function Form({todoHandler}) {
  const [text, setText] = React.useState("")
  const textInput = React.useRef(null);

  return (
    <div>
      <Paper style={{padding: "1em"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
          <TextField
            id="outlined-basic"
            label="Task"
            variant="outlined"
            fullWidth
            color={"primary"}
            onChange={(entry) => {
              setText(entry.target.value)
            }}
            inputRef={textInput}
            onKeyDown={(entry) => {
              if (entry.key === 'Enter') {
                todoHandler(text)
                textInput.current.value = "";
                entry.preventDefault();
              }
            }}
          />
          <Button variant="outlined" onClick={() => {
            if (text.trim()) {
              todoHandler(text)
              setText("")
            }
            textInput.current.value = "";
          }}>
            Add
          </Button>
        </div>
      </Paper>
    </div>
  )
}

export default Form;