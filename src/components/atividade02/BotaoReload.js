import R from "../../img/r.png";
import React from "react";

function BotaoReload() {
    return(
        <>
            <a onClick="window.location.reload()"> 
                <img src={R} style={{position: "absolute", right: "0", marginRight: "20px", height: "30px", width: "auto"}}/> 
            </a>
        </>
    );
}

export default BotaoReload;