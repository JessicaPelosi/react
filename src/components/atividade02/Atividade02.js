import BotaoReload from "./BotaoReload";
import Titulo from "./Titulo"

function Atividade02 () {
    return(
        <>
            <div>
                <Link to="/" style={{textDecoration: "none", color: "black"}}>
                    <button type="button" class="btn btn-dark btn"> 
                        Voltar  
                    </button>  
                </Link>
            </div>
            <Titulo/>
            <BotaoReload/>
        </>
    )
}

export default Atividade02;