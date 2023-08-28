import { HashRouter, Route, Routes } from "react-router-dom";
import { Layouts } from "./components/layouts/layouts";
import { MainPage } from "./pages/mainPage/mainPage";
import { FullPage } from "./pages/fullPage/fullPage";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Layouts />}>
            <Route path={"/"} element={<MainPage />} />
            <Route path={"/page"} element={<FullPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
