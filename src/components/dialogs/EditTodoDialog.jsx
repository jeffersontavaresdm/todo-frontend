import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {TransitionProps} from "@mui/material/transitions";
import {Slide, TextField} from "@mui/material";

const Transition = React.forwardRef(
  (props: TransitionProps & { children: React.ReactElement<any, any> }, reference) => {
    return <Slide direction="up" ref={reference} {...props} />;
  }
);

export default function EditTodoDialog({openDialog, dialogHandler, todo, handleEditTodo}) {
  const [editedText, setEditedText] = React.useState(todo.text)
  const editTodo = () => {
    if (editedText.trim()) {
      handleEditTodo(todo.id, editedText)
    }

    dialogHandler()
  }

  return (
    <Dialog
      open={openDialog}
      TransitionComponent={Transition}
      keepMounted
      onClose={dialogHandler}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
    >
      <DialogTitle>Edit task name</DialogTitle>
      <DialogContent>
        <TextField
          id="outlined-basic_02"
          label="Task"
          variant="outlined"
          color={"primary"}
          fullWidth
          defaultValue={editedText}
          onChange={(entry) => {
            const value = entry.target.value

            if (value.trim()) {
              setEditedText(value)
            }
          }}
          onKeyDown={(entry) => {
            if (entry.key === 'Enter') {
              editTodo()
              entry.preventDefault();
            }
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={dialogHandler}>CANCEL</Button>
        <Button onClick={editTodo}>CONFIRM</Button>
      </DialogActions>
    </Dialog>
  );
}
