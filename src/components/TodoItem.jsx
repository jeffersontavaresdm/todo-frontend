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

function TodoItem({todo, handleDeleteTodo, handleEditTodo}) {
  const [openDialog, setOpenDialog] = React.useState(false)
  const dialogHandler = () => setOpenDialog(!openDialog)

  return (
    <>
      <EditTodoDialog
        openDialog={openDialog}
        dialogHandler={dialogHandler}
        todo={todo}
        handleEditTodo={handleEditTodo}
      />
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
            <ListItemText primary={todo.text} onClick={() => setOpenDialog(true)}/>
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}

export default TodoItem;