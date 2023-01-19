import * as React from "react";
import styles from "./styles.module.scss";
import { CharacterCard } from "./components/characterCard";
import { AddButton } from "../../components/addButton";
import CharacterSheet from "./components/characterSheet";
import { PlayerProps } from "./types";
import { initialStatePlayer } from "./types/initialState";
import { LoadingIcon } from "../../components/loadingIcon";
import Service from "../../crud/services";

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
      const res = await Service.getAllPlayers();
      setLoading("loaded");
      setPlayersData(res.data.content);
    } catch (err) {
      setLoading("error");
    }
  };

  const postNewPlayerAPI = async (newPlayer: PlayerProps) => {
    try {
      setLoading("loading");
      await Service.createPlayer(newPlayer);
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
    <LoadingIcon />
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
        toggleForm={toggleModal}
        handleSubmit={handleSubmit}
        setPlayerData={setNewPlayer}
        playerData={newPlayer}
      />
    </div>
  );
};

export { PlayersPage };
