import React from 'react';
import './login.css'

import { MdAlternateEmail, MdLock } from "react-icons/md";

const Login = () => {
    return(
        <div className='login'>
            <div className='login-logo'>
                <img
                src="https://findicons.com/files/icons/2804/plex/512/password_manager.png" 
                alt="MdLockLogin"
                />
            </div>

            <div className="login-right">
                <h1>Acessar App</h1>

                <div className="login-loginInputEmail">
                    <MdAlternateEmail />
                    <input
                    type="text"
                    placeholder="Digite um email"
                    />
                </div>

                <div className="login-loginInputPassword">
                    <MdLock />
                    <input
                    type="text"
                    placeholder="Digite sua senha"
                    />
                </div>

                <button type="submit">
                    Entrar
                </button>

                <h4>Não tenho conta</h4>

                <button type="submit">
                    Cadastrar
                </button>
            </div>
        </div>
    );
}

export default Login;