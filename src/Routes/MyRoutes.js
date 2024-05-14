import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../components/Home";
import A01 from "../components/atividade01/A01";
import A02 from "../components/atividade02/A02";

export default function MyRoutes(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home /> }/>
            <Route path="/A01" element={<A01 /> }/>
            <Route path="/A02" element={<A02 /> }/>
        </Routes>
        </BrowserRouter>
    );
}