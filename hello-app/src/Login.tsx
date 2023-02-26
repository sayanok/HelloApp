import React, { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginProps = {
  setUsername: Dispatch<SetStateAction<string>>;
  username: string;
  setIsLogined: Dispatch<SetStateAction<boolean>>;
};

const Login: React.FC<LoginProps> = (props) => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<null | string>();
  const testUsername = "admin";
  const testPassword = "password";
  const navigate = useNavigate();

  function setInput(input: string, item: string) {
    setErrorMessage(null);
    if (item === "username") {
      props.setUsername(input);
    } else {
      setPassword(input);
    }
  }

  function loginHandler() {
    if (props.username === testUsername && password === testPassword) {
      navigate("/home");
      setErrorMessage(null);
      props.setIsLogined(true);
    } else {
      setErrorMessage("usernameかpasswordがちがうよ");
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
          style={{ borderColor: errorMessage ? "red" : "black" }}
        ></input>
      </p>
      <p>
        パスワード:{" "}
        <input
          type={"password"}
          onChange={(e) => {
            setInput(e.target.value, "password");
          }}
          style={{ borderColor: errorMessage ? "red" : "black" }}
        ></input>
      </p>
      <button
        onClick={() => {
          loginHandler();
        }}
      >
        ログイン
      </button>
      <p>{errorMessage}</p>
    </>
  );
};

export default Login;
