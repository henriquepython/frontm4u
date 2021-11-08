import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../pages/Login"
import Student from "../pages/cadastro"

const Router = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/' exact component={Login}/>
            <Route path='/cadastro'component={Student}/> 
        </Routes>
    </BrowserRouter>
    );
}

export default Router;