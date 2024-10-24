import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from "./components/pages/AboutPage";
import HomePage from "./components/pages/RSSPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<HomePage />} />
        <Route path={`/about/`} element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;