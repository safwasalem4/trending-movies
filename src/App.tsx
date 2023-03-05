import { Routes, Route } from "react-router-dom";
import { ROUTE_PATHS } from "./core/interfaces/enums/RoutesPaths";
import Home from "./modules/Home";
import Details from "./modules/Home/Details";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTE_PATHS.home} element={<Home />} />
        <Route path={ROUTE_PATHS.details} element={<Details />} />

        <Route path="/" element={<Home />} />
        <Route path="**" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
