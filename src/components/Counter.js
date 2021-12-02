import React, { useState } from "react";

const Counter = (props) => {
  const [dataValue, setDataValue] = useState(props.value);
  let value_ = dataValue;
  const incrementHandler = () => {
    value_++;
    setDataValue(value_);
  };
  const decrementHandler = () => {
    if (value_ < 1) value_ = 0;
    else value_--;
    setDataValue(value_);
  };
  const getValueBackground = () => {
    console.log("Bye");
    //return "badge badge-secondary";
    // let classes = "badge m-2 bagde-";
    // classes += value_ == 0 ? "danger" : value_ == 1 ? "primary" : "secondary";
    // console.log(classes);
  };

  const getValueFormatter = () => {
    console.log("Hello");
  };

  const getValueBackgroundClass = () => {
    let classes = "badge m-2 badge-";
    classes += value_ == 0 ? "danger" : value_ == 1 ? "primary" : "secondary";
    console.log(classes);
    return classes;
  };

  return (
    <div>
      <span className={getValueBackgroundClass}>{value_}</span>
      <button className="btn btn-primary m-2" onClick={incrementHandler}>
        +
      </button>
      <button className="btn btn-warning m-2" onClick={decrementHandler}>
        -
      </button>
      <button className="btn btn-danger m-2" onClick={props.onDeleteRow}>
        Delete
      </button>
    </div>
  );
};

export default Counter;
