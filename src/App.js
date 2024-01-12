import React from "react";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";

function App() {
  return (
    <div>
      <Topbar />
      <Login />
    </div>
  );
}

export default App;
