import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center" style={{padding: "0.5%"}}>
      <div id="home-container" className="cont">
        <nav>
          <div style={{padding: "0.5%"}}>
            <Link to="/Atividade01" style={{textDecoration: "none", color: "black"}}> 
              <button type="button" style={{width: "80%"}} class="btn btn-dark btn-lg"> 
                    Atividade 01 
              </button> 
            </Link>
          </div>
          
          <div style={{padding: "0.5%"}}>
            <Link to="/Atividade02" style={{textDecoration: "none", color: "black"}}> 
              <button type="button" style={{width: "80%"}} class="btn btn-dark btn-lg"> 
                    Atividade 02 
              </button> 
            </Link>
          </div>
          
          <div style={{padding: "0.5%"}}>
            <Link to="/Atividade03" style={{textDecoration: "none", color: "black"}}> 
              <button type="button" style={{width: "80%"}} class="btn btn-dark btn-lg"> 
                    Atividade 03 
              </button> 
            </Link>
          </div>
          
          <div style={{padding: "0.5%"}}>
            <Link to="/Atividade04" style={{textDecoration: "none", color: "black"}}> 
              <button type="button" style={{width: "80%"}} class="btn btn-dark btn-lg"> 
                    Atividade 04 
              </button> 
            </Link>
          </div>
          
        </nav>
      </div>
    </div>
  );
}

export default Home;