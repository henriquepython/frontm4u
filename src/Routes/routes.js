import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "../pages/Login"
import Student from "../pages/cadastro"

const Routers = () => {
    return(
    
        <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login/>}/>
                    <Route path="/cadastro" element={<Student/>}/>
                </Routes>
        </BrowserRouter>     
    
    );
}

export default Routers;