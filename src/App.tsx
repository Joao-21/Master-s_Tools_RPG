import { Route, Routes } from "react-router";
import { MenuDrawer } from "./components/menuDrawer";
import { PageLayout } from "./components/pageLayout/styles";
import { HomePage } from "./features/home";
import { PlayersPage } from "./features/players";

const App = () => {
  return (
    <div className="App">
      <PageLayout>
        <MenuDrawer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/players" element={<PlayersPage />} />
        </Routes>
      </PageLayout>
    </div>
  );
};

export { App };
