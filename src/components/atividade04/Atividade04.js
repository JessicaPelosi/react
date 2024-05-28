import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import App from "./App";
import Gallery from "./Gallery";
import Form from "./Form";
import MovingDot from "./MovingDot";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Counter from "./Counter";
import List from "./List";
import List2 from "./List2";
import ShapeEditor from "./ShapeEditor";
import CounterList from "./CounterList";
import List3 from "./List3";
import List4 from "./List4";
import BucketList from "./BucketList";

export function Atividade04() {
    return (
        <>
            <Link to="/"> Voltar para página inicial </Link>
            <h1> Atividade 04 </h1>
            <App />
            <Gallery />
            <Counter />
            <Form />
            <MovingDot />
            <Form2 />
            <Form3 />
            <List />
            <List2 />
            <ShapeEditor />
            <CounterList />
            <List3 />
            <List4 />
            <BucketList />
        </>
    );
}