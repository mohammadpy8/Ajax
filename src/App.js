import React from "react";
import Data from "./components/Data";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";
import CounterNumber from "./CounterNumber";
import Users from "./components/Users";

function App() {


  return (
    <Provider store={store}>
      <CounterNumber />
      <Users />
    </Provider>
  );
}

export default App;
