import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';
// import '../../../assets/General-styles/styles.css';

import api from '../../../services/api';

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    renderEmail(event) {
        this.setState({ email: event.target.value });
    }

    renderPassword(event) {
        this.setState({ password: event.target.value });
    }

    // Metodo que verifica se o usuário existe
    async login() {
        const response = await api.get(`/ranking/:${this.state.email}`)
    }

    render() {
        return (
            <section className="general-section">
                <div className="general-box">
                    <h1 className="general-title-form">Bem-Vindo de Volta! :)</h1>
                    <form className="form-general">

                        <label htmlFor="input-email">Email</label>
                        <input
                            type="email"
                            id="input-email"
                            className="general-input-place"
                            placeholder="Digite seu Email..."
                            onChange={(event) => this.renderEmail(event)} />

                        <label htmlFor="input-password">Senha</label>
                        <input
                            type="password"
                            id="input-password"
                            className="general-input-place"
                            placeholder="Digite sua senha..."
                            onChange={(event) => this.renderPassword(event)} />

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
    }
};