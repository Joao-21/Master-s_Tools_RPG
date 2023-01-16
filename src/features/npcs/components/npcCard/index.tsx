import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardActions,
  Button,
} from "@mui/material";
import axios from "axios";
import { Box } from "@mui/system";
import { ConfirmationDialog } from "../../../../components/confirmationDialog";
import NpcSheet from "../npcSheet";
import { NpcProps } from "../../types";
import styles from "./styles.module.scss";

interface Props {
  npcData: NpcProps;
  setLoadingStatus: (status: string) => void;
}

const NpcCard = ({ npcData, setLoadingStatus }: Props) => {
  const [openEditNpc, setOpenEditNpc] = useState(false);
  const [npcToEdit, setNpcToEdit] = useState(npcData);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const { id, name, race, title, history, city } = npcData;

  const toggleModal = () => {
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
      console.log(err.message);
    }
  };

  const deleteNpcAPI = async (id: string) => {
    try {
      await axios.delete(
        `https://rpgprojectlabs.azurewebsites.net/npc/${id}`
      );
      setLoadingStatus("idle");
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const handleDeleteNpc = () => {
    if (id) deleteNpcAPI(id);
  };

  const handleSubmit = () => {
    putNpcAPI(npcToEdit);
    toggleModal();
  };

  return (
    <Card style={{ boxShadow: "2px 2px 1px #2f3e46", overflow: "auto" }}>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <CardHeader title={name} className={styles.cardHeader} />
          <CardContent
            style={{
              paddingBottom: "8px",
              display: "flex",
              flexDirection: "column",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
          >
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
      </Box>
      <CardActions style={{ padding: "5px", justifyContent: "end" }}>
        <Button 
          style={{ background: "#513c27", color: "white" }}
          onClick={toggleModal} id={id}
        >Edit</Button>
        <Button variant="outlined" color="error" onClick={toggleDeleteModal} >Delete</Button>
      </CardActions>
      <NpcSheet
        open={openEditNpc}
        handleClose={toggleModal}
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
