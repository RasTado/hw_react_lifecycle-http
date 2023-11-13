import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage, Backe } from "./components/HomePage";
import Watches from "./components/watches/Watches";
import CRUD from "./components/crud/frontend/CRUD";

function App() {
  return (
    <BrowserRouter basename={"/hw_react_lifecycle-http/"}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/Task1"
          element={
            <>
              <Backe />
              <Watches />
            </>
          }
        />
        <Route
          path="/Task2"
          element={
            <>
              <Backe />
              <CRUD />
            </>
          }
        />
        <Route
          path="/Task3"
          element={
            <>
              <Backe />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
