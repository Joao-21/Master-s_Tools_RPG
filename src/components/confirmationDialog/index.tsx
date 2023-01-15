import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface Props {
  open: boolean;
  handleDialog: () => void;
}

const ConfirmationDialog = ({ open, handleDialog }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={handleDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialog}>Cancel</Button>
        <Button onClick={handleDialog} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { ConfirmationDialog };
