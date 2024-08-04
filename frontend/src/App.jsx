import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [serverMessage, setServerMessage] = useState("");

  axios.get("/api/server").then((res) => setServerMessage(res.data));

  return (
    <>
      <h1>Connecting Frontend and Backend Application</h1>
      <h4>Message From Server: {serverMessage}</h4>
    </>
  );
}

export default App;
