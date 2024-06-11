import React, { useState } from 'react';
import Man from './Man';
import Woman from './Woman';

const Total = () => {

  const [manCount, setManCount] = useState(0);
  const [womanCount, setWomanCount] = useState(0);

  const manHandleIncrement = () => {
    setManCount(manCount + 1);
  };
  const manHandleDecrement = () => {
    setManCount(manCount - 1);
  }
  const womanHandleIncrement = () => {
    setWomanCount(womanCount + 1);
  }
  const womanHandleDecrement = () => {
    setManCount(manCount - 1);
  }
  return (
    <div>
      <span style={{border: "solid", paddingRight: "50px", paddingLeft:"50px", fontSize:"30px",}}>{manCount + womanCount}</span><br/><br/>
      <div style={{position: "absolute", left: "10%", marginleft: "20px"}}>
      <Man Add={manHandleIncrement} Subtract={manHandleDecrement}/>
      </div>
      <div style={{position: "absolute", right: "10%", marginright: "20px"}}>
      <Woman Add={womanHandleIncrement} Subtract={womanHandleDecrement} />
      </div>
    </div>
  );
};

export default Total;