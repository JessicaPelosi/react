import R from "../../img/r.png";
import React from "react";


function BotaoReload() {
    function refreshPage() {
        window.location.reload(false);
      }
    return(
        <>
            <a onClick={refreshPage}> 
                <img src={R} style={{position: "absolute", right: "0", marginRight: "20px", height: "30px", width: "auto"}}/> 
            </a>
        </>
    );
}

export default BotaoReload;