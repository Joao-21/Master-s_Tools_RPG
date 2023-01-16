import * as React from "react";
import styles from "./styles.module.scss";
import { CharacterCard } from "./components/characterCard";
import { AddButton } from "../../components/addButton";
import CharacterSheet from "./components/characterSheet";
import axios from "axios";
import { PlayerProps } from "./types";
import { initialStatePlayer } from "./types/initialState";

const PlayersPage = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState("idle");
  const [playersData, setPlayersData] = React.useState([] as PlayerProps[]);
  const [newPlayer, setNewPlayer] = React.useState(initialStatePlayer);

  const toggleModal = () => {
    setOpen(!open);
    setNewPlayer(initialStatePlayer);
  };

  const getPlayersListAPI = async () => {
    try {
      setLoading("loading");
      const res = await axios.get(
        `https://rpgprojectlabs.azurewebsites.net/character`,
        {}
      );
      setLoading("loaded");
      setPlayersData(res.data.content);
    } catch (err) {
      setLoading("error");
    }
  };

  const postNewPlayerAPI = async (newPlayer: PlayerProps) => {
    try {
      setLoading("loading");
      await axios.post(
        "https://rpgprojectlabs.azurewebsites.net/character",
        newPlayer
      );
      setLoading("idle");
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const handleSubmit = () => {
    postNewPlayerAPI(newPlayer);
    toggleModal();
  };

  React.useEffect(() => {
    if (loading === "idle") getPlayersListAPI();
  }, [loading]);

  return loading === "loading" ? (
    <div>Loading...</div>
  ) : (
    <div className={styles.container}>
      {playersData.map((player) => {
        return (
          <CharacterCard
            playerData={player}
            key={player.id}
            setLoadingStatus={setLoading}
          />
        );
      })}
      <AddButton handleAddButton={toggleModal} />
      <CharacterSheet
        open={open}
        handleClose={toggleModal}
        handleSubmit={handleSubmit}
        setPlayerData={setNewPlayer}
        playerData={newPlayer}
      />
    </div>
  );
};

export { PlayersPage };
