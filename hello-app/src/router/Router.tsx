import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <>
            <Login />
          </>
        }
      />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
