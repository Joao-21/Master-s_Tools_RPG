import * as React from "react";
import Button from "@mui/material/Button";
// import Checkbox from '@mui/material/Checkbox';
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import { Divider, Typography } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

// import FormControlLabel from '@mui/material/FormControlLabel';

interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function CharacterSheet({ open, handleClose }: Props) {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  // 	setOpen(true);
  // };

  // const handleClose = () => {
  // 	setOpen(false);
  // };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
				New Character
			</Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Character Sheet</DialogTitle>
        <Divider />
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="player-name"
            label="Name of the player"
            type="text"
            fullWidth
            variant="standard"
          />
          <Button component="label" startIcon={<AddPhotoAlternateIcon />}>
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Stack direction="row" spacing={2}>
            <div>
              <TextField
                autoFocus
                margin="dense"
                id="character-name"
                label="Name of the character"
                type="text"
                fullWidth
                variant="standard"
              />
            </div>
            <div>
              <TextField
                autoFocus
                margin="dense"
                id="character-class"
                label="Class"
                type="text"
                fullWidth
                variant="standard"
              />
            </div>
          </Stack>
          <Stack direction="row" spacing={2}>
            <div>
              <TextField
                autoFocus
                margin="dense"
                id="character-race"
                label="Race"
                type="text"
                fullWidth
                variant="standard"
              />
            </div>
            <div>
              <TextField
                autoFocus
                margin="dense"
                id="character-level"
                label="Level"
                type="text"
                fullWidth
                variant="standard"
              />
            </div>
          </Stack>
          <Stack direction="row" spacing={2}>
            <div>
              <TextField
                autoFocus
                margin="dense"
                id="character-totalhp"
                label="Total HP"
                type="number"
                fullWidth
                variant="standard"
              />
            </div>
            <div>
              <TextField
                autoFocus
                margin="dense"
                id="character-totalac"
                label="Total AC"
                type="number"
                fullWidth
                variant="standard"
              />
            </div>
          </Stack>
          <Typography variant="subtitle1" component="div">
            Saving Throws
          </Typography>
          <Divider />
          <Stack direction="row" spacing={3}>
            <div>
              <TextField
                autoFocus
                margin="dense"
                id="character-strength"
                label="Strength"
                type="number"
                fullWidth
                variant="standard"
                size="small"
              />
            </div>
            <div>
              <TextField
                autoFocus
                margin="dense"
                id="character-dexterity"
                label="Dexterity"
                type="number"
                fullWidth
                variant="standard"
                size="small"
              />
            </div>
            <div>
              <TextField
                autoFocus
                margin="dense"
                id="character-constitution"
                label="Constitution"
                type="number"
                fullWidth
                variant="standard"
                size="small"
              />
            </div>
          </Stack>
          <Stack direction="row" spacing={3}>
            <div>
              <TextField
                autoFocus
                margin="dense"
                id="character-intelligence"
                label="Intelligence"
                type="number"
                fullWidth
                variant="standard"
                size="small"
              />
            </div>
            <div>
              <TextField
                autoFocus
                margin="dense"
                id="character-wisdom"
                label="Wisdom"
                type="number"
                fullWidth
                variant="standard"
                size="small"
              />
            </div>
            <div>
              <TextField
                autoFocus
                margin="dense"
                id="character-charisma"
                label="Charisma"
                type="number"
                fullWidth
                variant="standard"
                size="small"
              />
            </div>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
