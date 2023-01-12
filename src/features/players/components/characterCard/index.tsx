import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardActions,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import styles from "./styles.module.scss";

interface Props {
  playerName: string;
  characterName: string;
  logo: string;
  characterClass: string;
  race: string;
  level: number;
  totalHP: number;
  totalAC: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

const CharacterCard = ({
  playerName,
  characterName,
  logo,
  characterClass,
  race,
  level,
  totalHP,
  totalAC,
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma,
}: Props) => {
  return (
    <Card style={{ boxShadow: "2px 2px 1px #2f3e46", overflow: "auto" }}>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <img alt="" src={logo} className={styles.img} />
        <div>
          <CardHeader
            title={characterName}
            subheader={playerName}
            className={styles.cardHeader}
          />
          <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              <b>Class:</b> {characterClass}
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              <b>Race:</b> {race}
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              <b>Level:</b> {level}
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              <b>Total HP:</b> {totalHP}
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              <b>Armor Class:</b>
              {totalAC}
            </Typography>
          </div>
        </div>
      </Box>
      <CardContent
        style={{
          paddingBottom: "8px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: 14 }} style={{ fontWeight: "bold" }}>
          Saving Throws:
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
      <CardActions style={{ padding: "0px", justifyContent: "end" }}>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </CardActions>
    </Card>
  );
};

export { CharacterCard };
