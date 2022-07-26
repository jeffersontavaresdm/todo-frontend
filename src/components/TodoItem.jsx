import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {Paper} from "@mui/material";
import EditTodoDialog from "./EditTodoDialog";

function TodoItem({todo, handleDeleteTodo}) {
  return (
    <>
      <EditTodoDialog>
        <Paper>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="comments" onClick={() => handleDeleteTodo(todo.id)}>
                <DeleteIcon/>
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox edge="start"/>
              </ListItemIcon>
              <ListItemText primary={todo.text}/>
            </ListItemButton>
          </ListItem>
        </Paper>
      </EditTodoDialog>
    </>
  );
}

export default TodoItem;