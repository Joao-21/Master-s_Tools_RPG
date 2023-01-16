import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import { Divider, Typography } from "@mui/material";
import { PlayerProps } from "../../types";
import { MainButton } from "../../../../components/mainButton";
import { SecondaryButton } from "../../../../components/secondaryButton";

interface Props {
  open: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
  playerData: PlayerProps;
  setPlayerData: (player: PlayerProps) => void;
}

export default function CharacterSheet({
  open,
  handleClose,
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
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
                autoFocus
                name="characterName"
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
                autoFocus
                name="className"
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
                autoFocus
                name="race"
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
                autoFocus
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
                autoFocus
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
                autoFocus
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
                autoFocus
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
                autoFocus
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
                autoFocus
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
                autoFocus
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
                autoFocus
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
                autoFocus
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
          <SecondaryButton buttonName="Cancel" handleClick={handleClose} />
          <MainButton buttonName="Save" handleClick={handleSubmit} />
        </DialogActions>
      </Dialog>
    </div>
  );
}
