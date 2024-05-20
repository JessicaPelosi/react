import FirstComponent from './FirstComponent';
import Profile from './Profile';
import Gallery from './Gallery';
import { Link } from "react-router-dom";

export default function Atividade03(){
    return (
        <>
          <Link to="/"> Voltar para página inicial </Link>
          <h1> Atividade 03 </h1>
          <FirstComponent />
          <Profile />
          <Gallery />
          
        </>
    );
}