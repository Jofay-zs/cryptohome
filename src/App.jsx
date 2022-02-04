import React from "react";
import { Route, Routes } from "react-router-dom";
import { General } from "./Layout/General";
import Home from "./pages/Home";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import Cryptodetails from "./pages/Cryptodetails";
import Exchanges from "./pages/Exchanges";
import News from "./pages/News";
import Mentions from "./pages/Mentions";
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<General />}>
          <Route index element={<Home />} />
          <Route path="exchanges" element={<Exchanges />} />
          <Route path="news" element={<News />} />
          <Route path="cryptocurrencies" element={<Cryptocurrencies />}>
            <Route path=":coinid" element={<Cryptodetails />} />
          </Route>
          <Route path="mentions" element={<Mentions />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
