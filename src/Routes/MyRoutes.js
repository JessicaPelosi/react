import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../components/Home";
import Atividade01 from "../components/atividade01/Atividade01";
//import Atividade02 from "../components/atividade02/Atividade02";
import Atividade03 from "../components/atividade03/Atividade03";
import { Atividade04 } from "../components/atividade04/Atividade04";
import { Atividade05 } from "../components/atividade05/Atividade05";

export default function MyRoutes(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home /> }/>
            <Route path="/Atividade01" element={<Atividade01 /> }/>
            {/* <Route path="/Atividade02" element={<Atividade02 /> }/> */}
            <Route path="/Atividade03" element={<Atividade03 /> }/>
            <Route path="/Atividade04" element={<Atividade04 /> }/>
            <Route path="/Atividade05" element={<Atividade05 />}/>
        </Routes>
        </BrowserRouter>
    );
}