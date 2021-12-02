import React, { useState } from "react";
import Counter from "./Counter";

const Counters = (props) => {
  return props.counters_props.map((counter) => (
    <Counter
      key={counter.id}
      value={counter.value}
      onDeleteRow={() => props.deleteRow(counter.id)}
    />
  ));
};

export default Counters;
