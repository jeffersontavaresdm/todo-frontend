import {Button, Paper, TextField} from "@mui/material";
import React from 'react';

function Form({handleAddTodo}) {
  const [text, setText] = React.useState("")
  const textInput = React.useRef(null)
  const [id, setId] = React.useState(1)
  const createTodo = (text) => {
    let todo = {
      text: text,
      id: id
    }

    setId(id + 1)
    handleAddTodo(todo)
  }

  const setTodo = () => {
    if (text.trim()) {
      createTodo(text)
      setText("")
    }

    textInput.current.value = ""
  }

  return (
    <div>
      <Paper style={{padding: "1em"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
          <TextField
            id="outlined-basic_01"
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
                setTodo()
                entry.preventDefault();
              }
            }}
          />
          <Button variant="outlined" onClick={setTodo}>ADD</Button>
        </div>
      </Paper>
    </div>
  )
}

export default Form;