import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
const App = () => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              userList={userList}
              setUserList={setUserList}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/editor/:roomId"
          element={<Editor userList={userList} currentUser={currentUser} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
