import { Link } from "react-router-dom";
import BotaoReload from "./BotaoReload";
import Titulo from "./Titulo";
import Total from "./Total";
import styled from "styled-components";

function Atividade02 () {
    const Smain = styled.main`
    
    width: 400px;
    
    height: 400px;
    
    background-color: #f0f0f0;
    
    border: 2px solid #000;
    
    margin-left: auto;
    margin-right: auto;
    
    margin-top: 50px;
    margin-bottom: 100px;
    
    position: relative;
    
    max-width: 100%;
    text-align: center;
    padding-top: 2%;
    border-radius: 4%;
    `    

    return(
        <>
            <div>
                <Link to="/" style={{textDecoration: "none", color: "black"}}>
                    <button type="button" class="btn btn-dark btn"> 
                        Voltar  
                    </button>  
                </Link>
            </div>

        <Smain>    
            <Titulo/>
            <BotaoReload/>
            <Total />
        </Smain>
        </>
    )
}

export default Atividade02;