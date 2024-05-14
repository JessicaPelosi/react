import Calendario from './Calendario';
import Relogio from './Relogio';
import Letreiro from './Letreiro';
import { Link } from "react-router-dom";

export default function A01(){
    return (
        <>
          <Link to="/"> Voltar para página inicial </Link>
          <h1> Atividade 01 </h1>
          <Calendario />
          <Relogio />
          <Letreiro texto="Conheça a Fatec!     " />
          
        </>
    );
}