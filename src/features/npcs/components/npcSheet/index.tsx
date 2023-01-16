import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider } from "@mui/material";
import { NpcProps } from "../../types";

interface Props {
  open: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
  npcData: NpcProps;
  setNpcData: (npc: NpcProps) => void;
}

export default function CharacterSheet({
  open,
  handleClose,
  handleSubmit,
  npcData,
  setNpcData,
}: Props) {
  const { name, race, title, city, history } = npcData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setNpcData({ ...npcData, [name]: value });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>NPC Sheet</DialogTitle>
        <Divider />
        <DialogContent>
          <TextField
            autoFocus
            name="name"
            margin="dense"
            id="npc-name"
            label="Name of the NPC"
            type="text"
            fullWidth
            onChange={handleChange}
            value={name}
            variant="standard"
          />
          <TextField
            autoFocus
            name="race"
            margin="dense"
            id="npc-race"
            label="Race"
            type="text"
            fullWidth
            onChange={handleChange}
            value={race}
            variant="standard"
          />
          <TextField
            autoFocus
            name="title"
            margin="dense"
            id="npc-title"
            label="Title"
            type="text"
            fullWidth
            onChange={handleChange}
            value={title}
            variant="standard"
          />
          <TextField
            autoFocus
            name="city"
            margin="dense"
            id="npc-city"
            label="City"
            type="text"
            fullWidth
            onChange={handleChange}
            value={city}
            variant="standard"
          />
          <TextField
            autoFocus
            name="history"
            margin="dense"
            id="npc-history"
            label="History"
            type="text"
            fullWidth
            onChange={handleChange}
            value={history}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
