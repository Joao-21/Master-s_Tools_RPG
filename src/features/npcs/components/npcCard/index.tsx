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
  npcName: string;
  logo: string;
  race: string;
  title: string;
  city: string;
  history: string;
}

const NpcCard = ({ npcName, logo, race, title, history, city }: Props) => {
  return (
    <Card style={{ boxShadow: "2px 2px 1px #2f3e46", overflow: "auto" }}>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <img alt="" src={logo} className={styles.img} />
        <div>
          <CardHeader title={npcName} className={styles.cardHeader} />
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
      <CardActions style={{ padding: "0px", justifyContent: "end" }}>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </CardActions>
    </Card>
  );
};

export { NpcCard };
