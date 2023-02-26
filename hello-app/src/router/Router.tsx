import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";

export const Router = () => {
  const [username, setUsername] = useState("");
  const [isLogined, setIsLogined] = useState(false);

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login setUsername={setUsername} username={username} setIsLogined={setIsLogined} />}
      />
      <Route path="/home" element={<Home username={username} setIsLogined={setIsLogined} isLogined={isLogined} />} />
    </Routes>
  );
};
