import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "../components/Home";
import Atividade01 from "../Atividade01";
import Atividade2 from "../components/atividade02/Atividade2";

export default function MyRoutes(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home /> }/>
            <Route path="/Atividade01" element={<Atividade01 /> }/>
            <Route path="/Atividade02" element={<Atividade2 /> }/>
        </Routes>
        </BrowserRouter>
    );
}