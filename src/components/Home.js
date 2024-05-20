import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home-container" className="cont">
      <h1> Projeto React - Lab Engenharia </h1>
      <nav>
        <ul>
          <li> <Link to="/Atividade01"> Atividade 01 </Link> </li>
          <li> <Link to="/Atividade02"> Atividade 02 </Link> </li>
          <li> <Link to="/Atividade03"> Atividade 03 </Link> </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;