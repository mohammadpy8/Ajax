import React, { useState } from "react";
import Child from "./Child";
import Loading from "./Loading";
import FetchApi from "./FetchApi";
import SendPost from "./components/SendPost";

function App() {

  const [number, setNumber] = useState(0);

  const clickHandler = () => {

    setNumber(prevState => prevState + 1);

  }

  return (
    <div>
      <SendPost />
      <Child clickHandler={clickHandler} number={number} />
      <Loading clickHandler={clickHandler} number={number} />
      <FetchApi />
    </div>
  );
}

export default App;
