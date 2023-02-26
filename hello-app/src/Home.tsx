import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [locationData, setLocationData] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  useEffect(() => {
    getLocationData();
    setTranslatedMessage();
  });

  function getLocationData() {
    const endpoint = "http://ip-api.com/json/?fields=status,message,query";

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        if (response.status !== "success") {
          console.log("query failed: " + response.message);
          return;
        }
        setLocationData(xhr.response);
      }
    };
    xhr.open("GET", endpoint, true);
    xhr.send();
  }

  function setTranslatedMessage() {
    if (locationData) {
      const usersIp = JSON.parse(locationData).query;
      fetch(`https://hellosalut.stefanbohacek.dev/?ip=${usersIp}`)
        .then(function (response) {
          return response.json();
        })
        .then(function (jsonData) {
          setLoginMessage(jsonData.hello);
        });
    }
  }

  function logout() {
    navigate("/login");
  }
  return (
    <>
      <p>{loginMessage}username you have successfully logged in!</p>
      <button onClick={() => logout()}>ログアウト</button>
    </>
  );
};

export default Home;
