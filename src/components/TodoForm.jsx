import {Button, Paper, TextField} from "@mui/material";
import React from 'react';
import TodoService from "../services/TodoService";

function TodoForm({handleAddTodo}) {
  const [text, setText] = React.useState("")
  const textInput = React.useRef(null)

  const createTodo = async (text) => {
    let data = {name: text}

    let response = await TodoService.create(data.name)

    if (typeof response === 'object') {
      handleAddTodo(response.data)
    } else {
      console.log(response.code)
    }
  }

  const todoHandler = async () => {
    if (text.trim()) {
      await createTodo(text)
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
            onChange={(entry) => setText(entry.target.value)}
            inputRef={textInput}
            onKeyDown={async (entry) => {
              if (entry.key === 'Enter') {
                await todoHandler()
                entry.preventDefault();
              }
            }}
          />
          <Button variant="outlined" onClick={todoHandler}>ADD</Button>
        </div>
      </Paper>
    </div>
  )
}

export default TodoForm;