import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Editor from "./pages/Editor";

const App = () => {
  const [userList, setUserList] = useState(() => {
    const saved = localStorage.getItem("userList");
    return saved ? JSON.parse(saved) : [];
  });
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.setItem("userList", JSON.stringify(userList));
  }, [currentUser, userList]);

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
          element={
            <Editor
              userList={userList}
              currentUser={currentUser}
              setUserList={setUserList}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
