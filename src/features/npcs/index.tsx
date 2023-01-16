import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { AddButton } from "../../components/addButton";
import { NpcCard } from "./components/npcCard";
import NpcSheet from "./components/npcSheet";
import axios from "axios";
import { NpcProps } from "./types";
import { initialStateNpc } from "./types/initialState";

const NpcsPage = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState("idle");
  const [npcsData, setNpcsData] = useState([] as NpcProps[]);
  const [newNpc, setNewNpc] = useState(initialStateNpc);

  const toggleModal = () => {
    setOpen(!open);
    setNewNpc(initialStateNpc);
  };

  const getNpcsListAPI = async () => {
    try {
      setLoading("loading");
      const res = await axios.get(
        `https://rpgprojectlabs.azurewebsites.net/npc`,
        {}
      );
      setLoading("loaded");
      setNpcsData(res.data.content);
    } catch (err) {
      setLoading("error");
    }
  };

  const postNewNpcAPI = async (newNpc: NpcProps) => {
    try {
      setLoading("loading");
      await axios.post(
        "https://rpgprojectlabs.azurewebsites.net/npc",
        newNpc
      );
      setLoading("idle");
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const handleSubmit = () => {
    postNewNpcAPI(newNpc);
    toggleModal();
  };

  useEffect(() => {
    if (loading === "idle") getNpcsListAPI();
  }, [loading]);

  return loading === "loading" ? (
    <div>Loading...</div>
  ) : (
    <div className={styles.container}>
      {npcsData.map((npc) => {
        return(
          <NpcCard
            npcData={npc}
            key={npc.id}
            setLoadingStatus={setLoading}
          />
        );

      })}
      <AddButton handleAddButton={toggleModal} />
      <NpcSheet
        open={open}
        handleClose={toggleModal}
        handleSubmit={handleSubmit}
        setNpcData={setNewNpc}
        npcData={newNpc}
      />
    </div>
  );
};

export { NpcsPage };
