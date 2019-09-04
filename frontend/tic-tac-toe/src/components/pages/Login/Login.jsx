import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';
// import '../../../assets/General-styles/styles.css';

import api from '../../../services/api';

export default class Login extends Component {
    state = {
        nickName: '',
        password: ''
    }

    renderNickName(event) {
        this.setState({ nickName: event.target.value });
    }

    renderPassword(event) {
        this.setState({ password: event.target.value });
    }

    // Metodo que verifica se o usuário existe e realiza o login
    async login(event) {
        event.preventDefault();
        const response = await api.post('/login', {
            name: this.state.nickName,
            password: this.state.password
        });

        if (response.data.id === -1) {
            console.log('Usuário não cadastrado');
        } else {
            console.log('Usuário logado');
        }
    }

    render() {
        return (
            <section className="general-section">
                <div className="general-box">
                    <h1 className="general-title-form">Bem-Vindo de Volta! :)</h1>
                    <form className="form-general">

                        <label htmlFor="input-nickname">Nome de usuário</label>
                        <input
                            type="text"
                            id="input-nickname"
                            className="general-input-place"
                            placeholder="Digite seu nick (nome de jogador)"
                            onChange={(event) => this.renderNickName(event)} />

                        <label htmlFor="input-password">Senha</label>
                        <input
                            type="password"
                            id="input-password"
                            className="general-input-place"
                            placeholder="Digite sua senha..."
                            onChange={(event) => this.renderPassword(event)} />

                        <button
                            className="general-button-white-to-pink"
                            onClick={(event) => this.login(event)}>
                            Entrar
                        </button>


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