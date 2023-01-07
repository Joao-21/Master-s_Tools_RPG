import { Card, CardContent, Typography } from "@mui/material";

const CardCampaignInfo = () => {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Word of the Day
        </Typography>
      </CardContent>
    </Card>
  );
};

export { CardCampaignInfo };
