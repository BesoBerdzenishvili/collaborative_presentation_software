import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import EditorPage from "./components/EditorPage";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/editor/:roomId" element={<EditorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
