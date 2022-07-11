import Form from "../components/Form";
import {Button, Container} from "@mui/material";
import TodoItem from "../components/TodoItem";
import List from "@mui/material/List";
import React from "react";

function Home() {
  const [todos = Array, setTodos] = React.useState([])
  const todoHandler = (todo) => {
    setTodos([...todos, todo]);
  }

  return (
    <Container maxWidth={"xs"} style={{marginTop: "1em"}}>
      <Form todoHandler={todoHandler}/>
      <List sx={{width: '100%'}} style={{marginTop: "0.3em"}}>
        {todos.map((todo, index) => {
          return (
            <div style={{marginTop: "0.3em"}} key={index}>
              <TodoItem item={todo}/>
            </div>
          );
        })}
      </List>
      <Button variant={"contained"} color={"warning"} fullWidth onClick={() => {
        setTodos([])
      }}
      >DELETE ALL ITEMS</Button>
    </Container>
  )
}

export default Home;