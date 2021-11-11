import React, { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';

import { MdAlternateEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Login = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

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
                    placeholder="Digite um User"
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    />
                </div>

                <div className="login-loginInputPassword">
                    <MdLock />
                    <input
                    placeholder="Digite sua senha"
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <div className="login-eye">
                        {show ? (
                            <HiEye
                                size={20}
                                onClick={handleClick}
                                 />
                        ) : (
                            <HiEyeOff 
                                size={20}
                                onClick={handleClick}
                                 />
                        )}
                    </div>
                </div>

                <button type="submit">
                    Entrar
                </button>

                <h4>Não tenho conta</h4>

                <button type="string">
                    <Link className="cad" to="/cadastro">Cadastrar</Link>
                </button>
            </div>
        </div>
    );
}

export default Login;