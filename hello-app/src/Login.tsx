import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const testUsername = "admin";
  const testPassword = "password";
  const navigate = useNavigate();

  function setInput(input: string, item: string) {
    if (item === "username") {
      setUsername(input);
    } else {
      setPassword(input);
    }
  }

  function onClickHandler() {
    if (confirmCredentials()) {
      navigate("/home");
    }
  }

  function confirmCredentials() {
    if (username === testUsername && password === testPassword) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <p>
        ユーザー名:{" "}
        <input
          type={"text"}
          onChange={(e) => {
            setInput(e.target.value, "username");
          }}
        ></input>
      </p>
      <p>
        パスワード:{" "}
        <input
          type={"password"}
          onChange={(e) => {
            setInput(e.target.value, "password");
          }}
        ></input>
      </p>
      <button
        onClick={() => {
          onClickHandler();
        }}
      >
        ログイン
      </button>

      {username}
      {password}
    </>
  );
};

export default Login;
