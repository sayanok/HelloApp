import React, { useState } from "react";
import Home from "./Home";
import Login from "./Login";

const App: React.FC = () => {
  const [username, setUsername] = useState("");
  const [isLogined, setIsLogined] = useState(false);

  return (
    <>
      <Login setUsername={setUsername} username={username} setIsLogined={setIsLogined} />
      <Home username={username} setIsLogined={setIsLogined} isLogined={isLogined} />
    </>
  );
};

export default App;
