import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardActions,
} from "@mui/material";
import axios from "axios";
import { ConfirmationDialog } from "../../../../components/confirmationDialog";
import NpcSheet from "../npcSheet";
import { NpcProps } from "../../types";
import globalStyles from "../../../../styles/card.module.scss";


interface Props {
  npcData: NpcProps;
  setLoadingStatus: (status: string) => void;
}

const NpcCard = ({ npcData, setLoadingStatus }: Props) => {
  const [openEditNpc, setOpenEditNpc] = useState(false);
  const [npcToEdit, setNpcToEdit] = useState(npcData);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const { id, name, race, title, history, city } = npcData;

  const toggleEditModal = () => {
    setOpenEditNpc(!openEditNpc);
  };

  const toggleDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  const putNpcAPI = async (npc: NpcProps) => {
    try {
      await axios.put(
        `https://rpgprojectlabs.azurewebsites.net/npc/${npc.id}`,
        npc
      );
      setLoadingStatus("idle");
    } catch (err: any) {
      setLoadingStatus("error");
      console.log(err.message);
    }
  };

  const deleteNpcAPI = async (id: string) => {
    try {
      await axios.delete(`https://rpgprojectlabs.azurewebsites.net/npc/${id}`);
      setLoadingStatus("idle");
    } catch (err: any) {
      setLoadingStatus("error");
      console.log(err.message);
    }
  };

  const handleDeleteNpc = () => {
    if (id) deleteNpcAPI(id);
  };

  const handleSubmit = () => {
    putNpcAPI(npcToEdit);
    toggleEditModal();
  };

  return (
    <Card className={globalStyles.card_container}>
      <div>
        <CardHeader title={name} className={globalStyles.cardHeader} />
        <CardContent className={globalStyles.card_content}>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            <b>Race:</b> {race}
          </Typography>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            <b>Title:</b> {title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            <b>City:</b> {city}
          </Typography>
          <Typography sx={{ fontSize: 14 }}>
            <b>History:</b> {history}
          </Typography>
        </CardContent>
      </div>
      <CardActions
        className={globalStyles.card_actions}
        style={{ marginBottom: "16px" }}
      >
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
      <NpcSheet
        open={openEditNpc}
        toggleForm={toggleEditModal}
        handleSubmit={handleSubmit}
        setNpcData={setNpcToEdit}
        npcData={npcToEdit}
      />
      <ConfirmationDialog
        open={openDeleteModal}
        handleDialog={toggleDeleteModal}
        handleConfirmAction={handleDeleteNpc}
      />
    </Card>
  );
};

export { NpcCard };
