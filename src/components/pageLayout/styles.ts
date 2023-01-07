import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const PageLayout = styled(Box)(() => ({
  display: "flex",
}));

export const PageLayoutContainer = styled("div")(() => ({
  marginTop: "64px",
  padding: "16px",
  width: "100%",
}));
