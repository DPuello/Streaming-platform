import React, { useContext, useEffect, useState } from 'react'
import Cookies from "universal-cookie"
import getUser from '../../services/getUser';
import BackButton from '../general/BackButton/BackButton';
import postLogin from '../../services/postLogin';
import { UserContext } from '../../hooks/UserContext';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

function Login() {
    const [email, setEmail] = useState("");
    const [registered, setRegistered] = useState();
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [step, setStep] = useState(0);
    const [error, setError] = useState();
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const cookies = new Cookies();

    function step1(event) {
        event.preventDefault();
        getUser(email).then(res => {
            setRegistered(res);
            if (res) {
                setStep(1);
            }
            else {
                setError("No se encontró el usuario")
            }
        })
    }

    useEffect(() => {
        if (step == 0) {
            setPassword("");
            setRegistered();
        }
        setError();
    }, [step])

    function login(event) {
        event.preventDefault();
        postLogin(email, password, registered).then(res => {
            if (res) {
                setError();
                cookies.set("user", res)
                setUser(res);
                navigate("/");
            }
            else {
                setError("Contraseña incorrecta");
            }
        })
    }

    return (
        <div className='login'>
            <h3>Bienvenido</h3>
            {
                step == 0 &&
                <>
                    <div className='card_login'>
                        <h4>PASO 1</h4>
                        <h2>Escribe tu correo para continuar</h2>
                        <p>Es necesario iniciar sesión en tu cuenta. En caso de no tener una, recibirás indicaciones para crearla.</p>
                        <form onSubmit={step1}>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Correo electrónico' type='email' />
                            {
                                error ?
                                    <p className='text_error__login'>{error}</p>
                                    :
                                    <br />
                            }
                            <button type='submit'>Continuar</button>
                        </form>
                    </div>
                </>
            }
            {
                step == 1 &&
                <div className='card_login__nav'>
                    <BackButton onClick={() => setStep(0)} />
                    {registered != "register" ?
                        <div className='card_login'>
                            <h4>PASO 2</h4>
                            <h2>Ingresa tu contraseña</h2>
                            <p>Ingresa la contraseña del correo que tienes registrado</p>
                            <p>{email}</p>
                            <form onSubmit={login}>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Contraseña'
                                    type={showPassword ? "text" : 'password'}
                                />
                                {
                                    error ?
                                        <p className='text_error__login'>{error}</p>
                                        :
                                        <br />
                                }
                                <button type='submit'>Continuar</button>
                            </form>
                        </div>
                        :
                        <div className='card_login'>
                            <h4>PASO 2</h4>
                            <h2>Crea tu contraseña</h2>
                            <p>Ingresa una contraseña para registrar tu correo</p>
                            <p>{email}</p>
                            <form onSubmit={login}>
                                <input value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Contraseña'
                                    type={showPassword ? "text" : 'password'}
                                />
                                <button type='submit'>Continuar</button>
                            </form>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Login