import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
//import App from "./App";
function App() {
  return (
    <div className="card">
      <div className="container">
        <Cover />
        <ProfilePhoto />
        <Name />
        <Intro />
        <Expirience />
      </div>
    </div>
  );
}

function Cover() {
  return (
    <div className="cover-photo">
      <img src="public" alt="jocover" />
    </div>
  );
}

function ProfilePhoto() {
  return <img src="public/gp.jpg" alt="josephine" />;
}
function Name() {
  return <h2> JOSEPHINE NAAVA </h2>;
}
function Intro() {
  return (
    <h3>
      {" "}
      "Josephine is an electrical engineer that practices software engineering
      passionately"{" "}
    </h3>
  );
}
function Expirience() {
  return (
    <div>
      <p>
        {" "}
        She i scurrently working as a software deveploper at Simba Talents Group
      </p>

      <ul>
        <li>Html & css</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Wordpress</li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
