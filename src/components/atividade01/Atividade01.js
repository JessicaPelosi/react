import Calendario from './Calendario';
import Relogio from './Relogio';
import Letreiro from './Letreiro';
import { Link } from "react-router-dom";

export default function Atividade01(){
    return (
        <>
          <div>
            <Link to="/" style={{textDecoration: "none", color: "black"}}>
              <button type="button" class="btn btn-dark btn"> 
                Voltar  
              </button>  
            </Link>
          </div>
          <Calendario />
          <Relogio />
          <Letreiro texto="Conheça a Fatec!     " /> 
        </>
    );
}