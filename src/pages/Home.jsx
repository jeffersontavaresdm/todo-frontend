import Form from "../components/Form";
import {Container} from "@mui/material";
import TodoItem from "../components/TodoItem";
import List from "@mui/material/List";
import React from "react";
import DeleteAllTodosAlertDialog from "../components/DeleteAllTodosAlertDialog";

function Home() {
  const [todos = Array, setTodos] = React.useState([])
  const handleAddTodo = (todo) => setTodos([...todos, todo])
  const handleDeleteTodo = (todoId) => {
    let filteredTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(typeof filteredTodos === "string" ? filteredTodos.split('') : filteredTodos)
  }

  const handleEditTodo = (todoId, editedText) => {
    const newTodoList = [...todos];

    newTodoList.forEach(todo => {
      if (todo.id === todoId) {
        todo.text = editedText
      }
    })

    setTodos(newTodoList)
  }

  const handleRemoveAllItems = () => setTodos([])

  return (
    <Container maxWidth={"xs"} style={{marginTop: "1em"}}>
      <Form handleAddTodo={handleAddTodo}/>
      <List sx={{width: '100%'}} style={{marginTop: "0.3em"}}>
        {todos.map((todo) => {
          return (
            <div style={{marginTop: "0.3em"}} key={`#${todo.id}`}>
              <TodoItem todo={todo} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
            </div>
          );
        })}
      </List>
      <div>
        {todos.length !== 0
          ? (<DeleteAllTodosAlertDialog handleRemoveAllItems={handleRemoveAllItems} todoSize={todos.length}/>)
          : (<></>)
        }
      </div>
    </Container>
  )
}

export default Home;