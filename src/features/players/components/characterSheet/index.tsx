import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import { Divider, Typography } from "@mui/material";
import { PlayerProps } from "../../types";

interface Props {
  open: boolean;
  toggleForm: () => void;
  handleSubmit: () => void;
  playerData: PlayerProps;
  setPlayerData: (player: PlayerProps) => void;
}

export default function CharacterSheet({
  open,
  toggleForm,
  handleSubmit,
  playerData,
  setPlayerData,
}: Props) {
  const {
    armorClass,
    characterName,
    charisma,
    className,
    constitution,
    dexterity,
    intelligence,
    level,
    ownerName,
    race,
    strength,
    totalhp,
    wisdom,
  } = playerData;

  const initialStatePlayerValidation = {
    armorClass: true,
    characterName: characterName !== "" ? true : null,
    charisma: true,
    className: className !== "" ? true : null,
    constitution: true,
    dexterity: true,
    intelligence: true,
    level: true,
    ownerName: ownerName !== "" ? true : null,
    race: race !== "" ? true : null,
    strength: true,
    totalhp: true,
    wisdom: true,
  };
  const [isFieldValid, setIsFieldValid] = React.useState(
    initialStatePlayerValidation
  );
  const enabledSubmitButton = Object.values(isFieldValid).every(
    (field) => field === true
  );

  const resetForm = () => {
    setIsFieldValid(initialStatePlayerValidation);
  };

  const handleClose = () => {
    toggleForm();
    resetForm();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    let value = event.target.value;
    if (event.target.type === "number") {
      value = Math.max(parseInt(value), 0).toString();
      setIsFieldValid({ ...isFieldValid, [name]: parseInt(value) >= 0 });
    } else if (event.target.type === "text") {
      value = value.slice(0, 20);
      setIsFieldValid({ ...isFieldValid, [name]: value !== "" });
    }
    setPlayerData({ ...playerData, [name]: value });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Character Sheet</DialogTitle>
        <Divider />
        <DialogContent>
          <TextField
            autoFocus
            required
            error={isFieldValid.ownerName === false}
            name="ownerName"
            margin="dense"
            id="player-name"
            label="Name of the player"
            type="text"
            fullWidth
            onChange={handleChange}
            value={ownerName}
            variant="standard"
          />
          <Stack direction="row" spacing={2}>
            <div>
              <TextField
                name="characterName"
                required
                error={isFieldValid.characterName === false}
                margin="dense"
                id="character-name"
                label="Name of the character"
                type="text"
                fullWidth
                onChange={handleChange}
                value={characterName}
                variant="standard"
              />
            </div>
            <div>
              <TextField
                name="className"
                required
                error={isFieldValid.className === false}
                margin="dense"
                id="character-class"
                label="Class"
                type="text"
                fullWidth
                onChange={handleChange}
                value={className}
                variant="standard"
              />
            </div>
          </Stack>
          <Stack direction="row" spacing={2}>
            <div>
              <TextField
                name="race"
                required
                error={isFieldValid.race === false}
                margin="dense"
                id="character-race"
                label="Race"
                type="text"
                fullWidth
                onChange={handleChange}
                value={race}
                variant="standard"
              />
            </div>
            <div>
              <TextField
                name="level"
                margin="dense"
                id="character-level"
                label="Level"
                type="number"
                fullWidth
                onChange={handleChange}
                value={level}
                variant="standard"
              />
            </div>
          </Stack>
          <Stack direction="row" spacing={2}>
            <div>
              <TextField
                name="totalhp"
                margin="dense"
                id="character-totalhp"
                label="Total HP"
                type="number"
                fullWidth
                onChange={handleChange}
                value={totalhp}
                variant="standard"
              />
            </div>
            <div>
              <TextField
                name="armorClass"
                margin="dense"
                id="character-totalac"
                label="Total AC"
                type="number"
                fullWidth
                onChange={handleChange}
                value={armorClass}
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
                name="strength"
                margin="dense"
                id="character-strength"
                label="Strength"
                type="number"
                fullWidth
                onChange={handleChange}
                value={strength}
                variant="standard"
                size="small"
              />
            </div>
            <div>
              <TextField
                name="dexterity"
                margin="dense"
                id="character-dexterity"
                label="Dexterity"
                type="number"
                fullWidth
                onChange={handleChange}
                value={dexterity}
                variant="standard"
                size="small"
              />
            </div>
            <div>
              <TextField
                name="constitution"
                margin="dense"
                id="character-constitution"
                label="Constitution"
                type="number"
                fullWidth
                onChange={handleChange}
                value={constitution}
                variant="standard"
                size="small"
              />
            </div>
          </Stack>
          <Stack direction="row" spacing={3}>
            <div>
              <TextField
                name="intelligence"
                margin="dense"
                id="character-intelligence"
                label="Intelligence"
                type="number"
                fullWidth
                onChange={handleChange}
                value={intelligence}
                variant="standard"
                size="small"
              />
            </div>
            <div>
              <TextField
                name="wisdom"
                margin="dense"
                id="character-wisdom"
                label="Wisdom"
                type="number"
                fullWidth
                onChange={handleChange}
                value={wisdom}
                variant="standard"
                size="small"
              />
            </div>
            <div>
              <TextField
                name="charisma"
                margin="dense"
                id="character-charisma"
                label="Charisma"
                type="number"
                fullWidth
                onChange={handleChange}
                value={charisma}
                variant="standard"
                size="small"
              />
            </div>
          </Stack>
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
