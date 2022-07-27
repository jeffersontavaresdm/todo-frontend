import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function DeleteAllTodosAlertDialog({handleRemoveAllItems, todoSize}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmButton = () => {
    if (todoSize !== 0) {
      handleRemoveAllItems()
    }
  }

  return (
    <div>
      <Button variant={"contained"} color={"error"} fullWidth onClick={handleClickOpen}>DELETE ALL ITEMS</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete all items?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            After confirming, all items in your to-do list will be deleted.
            <br/>
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CANCEL</Button>
          <Button onClick={() => {
            handleClose()
            handleConfirmButton()
          }} autoFocus>CONFIRM</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteAllTodosAlertDialog