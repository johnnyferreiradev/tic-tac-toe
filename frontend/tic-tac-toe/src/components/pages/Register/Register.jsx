import React from 'react';
import { Link } from 'react-router-dom';

const Register = () =>(
    <section className="registerr">
        <div className="register-box">
            <h1 className="title-form">Registrar! =)</h1>
            <form className="form-login">
                <label htmlFor="input-email">Email</label>
                <input type="email" id="input-email" placeholder="Digite seu Email..."/>
                <label htmlFor="input-password">Senha</label>
                <input type="password" class="input-password" placeholder="Digite sua senha..."/>

                <label htmlFor="input-password">Senha</label>
                <input type="password" class="input-password" placeholder="Digite sua senha novamente..."/>

                <nav className="register">
                    <Link to="/register">Registrar</Link>
                </nav>

            </form>
        </div>
    </section>
)

export default Register;