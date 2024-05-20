import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../components/Home";
import Atividade01 from "../components/atividade01/Atividade01";
//import Atividade02 from "../components/atividade02/Atividade02";
import Atividade03 from "../components/atividade03/Atividade03";

export default function MyRoutes(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home /> }/>
            <Route path="/Atividade01" element={<Atividade01 /> }/>
            {/* <Route path="/Atividade02" element={<Atividade02 /> }/> */}
            <Route path="/Atividade03" element={<Atividade03 /> }/>
        </Routes>
        </BrowserRouter>
    );
}