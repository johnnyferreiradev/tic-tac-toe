import React from 'react';

import  './Login.css';

const Login = () => (
    <section className="login">
        <div className="login-box">
            <h1 className="title-form">Bem-Vindo de Volta! :)</h1>
            <form className="form-login">
                <label htmlFor="input-email">Email</label>
                <input type="email" id="input-email" placeholder="Digite seu Email..."/>
                <label htmlFor="input-password">Senha</label>
                <input type="password" id="input-password" placeholder="Digite sua senha..."/>

                <button>Entrar</button>

                <p>
                    Não possui uma conta? <a href className="link-register">Cadastrar-se</a>
                </p>
            </form>
        </div>
    </section>
)

export default Login;