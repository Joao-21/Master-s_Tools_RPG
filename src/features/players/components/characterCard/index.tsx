import {
  Button,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardActions,
} from "@mui/material";
import styles from "./styles.module.scss";
import globalStyles from "../../../../styles/card.module.scss";
import { PlayerProps } from "../../types";
import { useState } from "react";
import CharacterSheet from "../characterSheet";
import axios from "axios";
import { ConfirmationDialog } from "../../../../components/confirmationDialog";

interface Props {
  playerData: PlayerProps;
  setLoadingStatus: (status: string) => void;
}

const CharacterCard = ({ playerData, setLoadingStatus }: Props) => {
  const [openEditPlayer, setOpenEditPlayer] = useState(false);
  const [playerToEdit, setPlayerToEdit] = useState(playerData);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const {
    armorClass,
    characterName,
    charisma,
    className,
    constitution,
    dexterity,
    id,
    intelligence,
    level,
    ownerName,
    race,
    strength,
    totalhp,
    wisdom,
  } = playerData;

  const toggleEditModal = () => {
    setOpenEditPlayer(!openEditPlayer);
  };

  const toggleDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  const putPlayerAPI = async (player: PlayerProps) => {
    try {
      await axios.put(
        `https://rpgprojectlabs.azurewebsites.net/character/${player.id}`,
        player
      );
      setLoadingStatus("idle");
    } catch (err: any) {
      setLoadingStatus("error");
      console.log(err.message);
    }
  };

  const deletePlayerAPI = async (id: string) => {
    try {
      await axios.delete(
        `https://rpgprojectlabs.azurewebsites.net/character/${id}`
      );
      setLoadingStatus("idle");
    } catch (err: any) {
      setLoadingStatus("error");
      console.log(err.message);
    }
  };

  const handleDeletePlayer = () => {
    if (id) deletePlayerAPI(id);
  };

  const handleEditPlayer = () => {
    putPlayerAPI(playerToEdit);
    toggleEditModal();
  };

  return (
    <Card className={globalStyles.card_container}>
      <div>
        <CardHeader
          title={characterName}
          subheader={ownerName}
          className={globalStyles.cardHeader}
        />
        <div className={globalStyles.character_container}>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            <b>Class:</b> {className}
          </Typography>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            <b>Race:</b> {race}
          </Typography>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            <b>Level:</b> {level}
          </Typography>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            <b>Total HP:</b> {totalhp}
          </Typography>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            <b>Armor Class:</b>
            {armorClass}
          </Typography>
        </div>
        <CardContent className={globalStyles.card_content}>
          <Typography sx={{ fontSize: 14 }}>
            <b>Saving Throws:</b>
          </Typography>
          <div className={styles.saving_throws}>
            <div>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                <b>Strength:</b> {strength}
              </Typography>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                <b>Dexterity:</b> {dexterity}
              </Typography>
            </div>
            <div>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                <b>Constitution:</b> {constitution}
              </Typography>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                <b>Intelligence:</b> {intelligence}
              </Typography>
            </div>
            <div>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                <b>Wisdom:</b> {wisdom}
              </Typography>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                <b>Charisma:</b> {charisma}
              </Typography>
            </div>
          </div>
        </CardContent>
      </div>
      <CardActions className={globalStyles.card_actions}>
        <Button variant="outlined" color="error" onClick={toggleDeleteModal}>
          Delete
        </Button>
        <Button
          variant="contained"
          // disabled={!enabledSubmitButton}
          onClick={toggleEditModal}
        >
          Edit
        </Button>
      </CardActions>
      <CharacterSheet
        open={openEditPlayer}
        toggleForm={toggleEditModal}
        handleSubmit={handleEditPlayer}
        setPlayerData={setPlayerToEdit}
        playerData={playerToEdit}
      />
      <ConfirmationDialog
        open={openDeleteModal}
        handleDialog={toggleDeleteModal}
        handleConfirmAction={handleDeletePlayer}
      />
    </Card>
  );
};

export { CharacterCard };
