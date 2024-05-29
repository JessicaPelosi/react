import FormQuiz from "./FormQuiz";
import { Link } from "react-router-dom";
import FormTicket from "./FormTicket";
import Accordion from "./Accordion";
import Messenger from "./App";

export function Atividade05() {
    return (
        <>
            <div>
                <Link to="/" style={{textDecoration: "none", color: "black"}}>
                    <button type="button" class="btn btn-dark btn"> 
                        Voltar  
                    </button>  
                </Link>
            </div>
            <div style={{padding: "1%"}}>
                <div className="card" style={{width: "35rem", padding: "1.5%"}}> <FormQuiz /> </div>
                </div>
            <div style={{padding: "1%"}}>
                <div className="card" style={{width: "35rem", padding: "1.5%"}}> <FormTicket /> </div>
            </div>
            <div style={{padding: "1%"}}>
                <div className="card" style={{width: "35rem", padding: "1.5%"}}> <Accordion /> </div>
            </div>
            <div style={{padding: "1%"}}>
                <div className="card" style={{width: "35rem", padding: "1.5%"}}> <Messenger /> </div>
            </div>
        </>
    );
}