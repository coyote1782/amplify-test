import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import HomeCreateForm from "./ui-components/HomeCreateForm";
import NewHome from "./ui-components/NewHome";
import viteLogo from "/vite.svg";
import PeopleCreateForm from "./ui-components/PeopleCreateForm";
import ProfileCardCollection from "./ui-components/ProfileCardCollection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>Home</div>
      <HomeCreateForm />
      <NewHome />
      <div>People</div>
      <PeopleCreateForm />
      <ProfileCardCollection />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
