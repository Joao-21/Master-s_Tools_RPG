import { Card, CardContent, Typography, CardHeader } from "@mui/material";
import styles from "./styles.module.scss";

const CardCampaignInfo = () => {
  return (
    <Card>
      <CardHeader
        title="Medieval Campaign"
        subheader="2023"
        className={styles.CardHeader}
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Word of the Day
        </Typography>
      </CardContent>
    </Card>
  );
};

export { CardCampaignInfo };
