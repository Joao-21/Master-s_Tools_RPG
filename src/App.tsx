import { Route, Routes } from "react-router";
import { MenuDrawer } from "./components/menuDrawer";
import {
  PageLayout,
  PageLayoutContainer,
} from "./components/pageLayout/styles";
import { HomePage } from "./features/home";
import { NpcsPage } from "./features/npcs";
import { PlayersPage } from "./features/players";

const App = () => {
  return (
    <div className="App">
      <PageLayout>
        <MenuDrawer />
        <PageLayoutContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/players" element={<PlayersPage />} />
            <Route path="/npcs" element={<NpcsPage />} />
          </Routes>
        </PageLayoutContainer>
      </PageLayout>
    </div>
  );
};

export { App };
