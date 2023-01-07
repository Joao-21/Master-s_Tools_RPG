import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const PageLayout = styled(Box)(() => ({
  display: "flex",
  height: "100vh",
  width: "100vw",
  background: "#d7c2ab",
}));

export const PageLayoutContainer = styled("div")(() => ({
  marginTop: "64px",
  padding: "16px",
}));
