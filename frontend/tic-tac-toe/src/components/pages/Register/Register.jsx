import React from 'react';
import { Link } from 'react-router-dom';
import '../../General-styles/styles.css';

const Register = () =>(
    <section className="general-section">
        <div className="general-box">
            <h1 className="general-title-form">Registrar! =)</h1>
            <form className="form-general">

                <label htmlFor="input-email">Email</label>
                <input type="email" id="input-email" className="general-input-place" placeholder="Digite seu Email..."/>

                <label htmlFor="input-password">Senha</label>
                <input type="password" className="general-input-place" placeholder="Digite sua senha..."/>

                <label htmlFor="input-password">Senha</label>
                <input type="password" className="general-input-place" placeholder="Digite sua senha novamente..."/>

                             
                <input type="checkbox">

                </input>
                Deseja aceitar os termos?

                <Link to="/register" className="button-mode">
                    <button className="general-button-white-to-pink">
                        Registrar
                    </button>    
                </Link>
            </form>
        </div>
    </section>
)

export default Register;