import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";
const DummyCounters = [
  { id: 1, value: 7 },
  { id: 2, value: 0 },
  { id: 3, value: 2 },
  { id: 4, value: 0 },
];

function App() {
  const [counters, setcounters] = useState(DummyCounters);
  const deleteHandler = (id) => {
    let counters_new = counters.filter((c) => c.id != id);
    setcounters(counters_new);
  };
  const resetHandler = () => {
    const counters_new = DummyCounters.map((c) => {
      c.value = 0;
      return c;
    });
    setcounters(counters_new);
  };
  return (
    <React.Fragment>
      <Navbar totalItem={counters.length} onReset={resetHandler} />
      <Counters counters_props={counters} deleteRow={deleteHandler} />
    </React.Fragment>
  );
}

export default App;
