import * as React from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider } from "@mui/material";
import { NpcProps } from "../../types";

interface Props {
  open: boolean;
  toggleForm: () => void;
  handleSubmit: () => void;
  npcData: NpcProps;
  setNpcData: (npc: NpcProps) => void;
}

export default function NpcSheet({
  open,
  toggleForm,
  handleSubmit,
  npcData,
  setNpcData,
}: Props) {
  const { name, race, title, city, history } = npcData;
  const initialStateNpcValidation = {
    name: race !== "" ? true : null,
    race: race !== "" ? true : null,
    title: title !== "" ? true : null,
    city: city !== "" ? true : null,
    history: history !== "" ? true : null,
  };

  const [isFieldValid, setIsFieldValid] = React.useState(
    initialStateNpcValidation
  );
  const enabledSubmitButton = Object.values(isFieldValid).every(
    (field) => field === true
  );

  const resetForm = () => {
    setIsFieldValid(initialStateNpcValidation);
  };

  const handleClose = () => {
    toggleForm();
    resetForm();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    let value = event.target.value;
    value = value.slice(0, 140);
    setIsFieldValid({ ...isFieldValid, [name]: value !== "" });
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
            required
            error={isFieldValid.name === false}
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
            required
            error={isFieldValid.race === false}
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
            required
            name="city"
            error={isFieldValid.city === false}
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
            required
            name="history"
            error={isFieldValid.history === false}
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
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={!enabledSubmitButton}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
