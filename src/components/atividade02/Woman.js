import React, { useState } from 'react';
import plus from "../../img/plus.png";
import minus from "../../img/minus.png";
import woman from "../../img/woman.png";

const Woman = ({ Add, Subtract}) => {
    const [count, setCount] = useState(0);
  
    const add = () => {
      setCount(count + 1);
      Add();
    };

    const subtract = () => {
        if (count > 0) {
            setCount(count - 1);
            Subtract();
            }
    }

  
    return (
      <div>
        <span style={{border: "solid", paddingRight: "50px", paddingLeft:"50px"}}>{count}</span><br/>
        <img src={woman} style={{height: "150px", width: "150px", padding:"15px"}}/><br/>
        <a onClick={add} ><img src={plus}></img></a>
        <a onClick={subtract} ><img src={minus}></img></a>
      </div>
    );
  };
  
  export default Woman;