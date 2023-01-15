import * as React from "react";
import styles from "./styles.module.scss";
import { CharacterCard } from "./components/characterCard";
import { AddButton } from "../../components/addButton";
import CharacterSheet from "./components/characterSheet";
import axios from "axios";
import { PlayerProps } from "./types";

const PlayersPage = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState("");
  const [playerData, setPlayerData] = React.useState([] as PlayerProps[]);

  const handleOpenModal = () => {
    setOpen(!open);
  };

  const getPlayersListAPI = async () => {
    try {
      setLoading("loading");
      const res = await axios.get(
        `https://rpgprojectlabs.azurewebsites.net/character`,
        {}
      );
      setLoading("loaded");
      setPlayerData(res.data.content);
    } catch (err) {
      setLoading("error");
    }
  };

  React.useEffect(() => {
    getPlayersListAPI();
  }, []);

  return loading === "loading" ? (
    <div>Loading...</div>
  ) : (
    <div className={styles.container}>
      {playerData.map((player) => {
        return <CharacterCard playerData={player} key={player.id} />;
      })}

      <AddButton handleAddButton={handleOpenModal} />
      <CharacterSheet open={open} handleClose={handleOpenModal} />
    </div>
  );
};

export { PlayersPage };
