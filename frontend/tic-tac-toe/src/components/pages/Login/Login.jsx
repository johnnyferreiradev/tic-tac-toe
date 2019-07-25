import React from 'react';
import { Link } from 'react-router-dom';
import  './Login.css';
import '../../General-styles/styles.css';

const Login = () => (
    <section className="general-section">
        <div className="general-box">
            <h1 className="general-title-form">Bem-Vindo de Volta! :)</h1>
            <form className="form-general">

                <label htmlFor="input-email">Email</label>
                <input type="email" id="input-email" className="general-input-place" placeholder="Digite seu Email..."/>

                <label htmlFor="input-password">Senha</label>
                <input type="password" id="input-password" className="general-input-place" placeholder="Digite sua senha..."/>

                <button className="general-button-white-to-pink">Entrar</button>
            

                <p>
                    Não possui uma conta?      
                    <Link to="/register" className="button-mode">
                        <button className="general-button-white-to-pink">Registrar</button>
                    </Link>
                </p>
            </form>
        </div>
    </section>
)

export default Login;