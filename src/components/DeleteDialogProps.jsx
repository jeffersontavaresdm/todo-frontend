import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import React from "react";

export class DeleteDialogProps {
  open;
  title;
  text;
  handleAccept;
  handleCancel;
  acceptText;
  cancelText;
}

export const DeleteDialog = (
  {
    open,
    title,
    text,
    handleAccept,
    handleCancel,
    acceptText = "Confirm",
    cancelText = "Cancel",
  }) => {

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>{cancelText}</Button>
        <Button onClick={handleAccept} autoFocus>
          {acceptText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}