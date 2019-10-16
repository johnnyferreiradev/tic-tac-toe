import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import api from '../../../services/api';

import BackButton from '../../templates/BackButton/BackButton';

import './Register.css';

export default class Register extends Component {
    state = {
        nickName: '',
        email: '',
        password: '',
        confirmPassword: '',
        errorStatus: -1,
        errorMessage: [
            'Preencha todos os campos!',
            'Senhas não conferem',
            'Este nome de usuário ou email já está sendo utilizado!'
        ],
        redirect: false
    }

    renderNickName(event) {
        this.setState({ nickName: event.target.value });
    }

    renderEmail(event) {
        this.setState({ email: event.target.value });
    }

    renderPassword(event) {
        this.setState({ password: event.target.value });
    }

    renderConfirmPassword(event) {
        this.setState({ confirmPassword: event.target.value });
    }

    passwordsCheck() {
        const { password, confirmPassword } = this.state;
        if (password !== '' && password === confirmPassword) {
            return true;
        } else {
            return false;
        }
    }

    validations(event) {
        event.preventDefault();
        const { nickName, email, password, confirmPassword } = this.state;

        if (nickName === '' || email === '' || password === '' || confirmPassword === '') {
            this.setState({ errorStatus: 0 });
            return;
        }

        if (this.passwordsCheck() === false) {
            this.setState({ errorStatus: 1 });
            return;
        }

        this.setState({ errorStatus: -1 });
        this.register();
    }

    // Metodo que verifica se os dados estão de acordo e registra um usuário
    async register() {
        const response = await api.post('/signup', {
            name: this.state.nickName,
            score: 0,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        });

        if (response.data.id === -1) {
            this.setState({ errorStatus: 2 });
        } else {
            this.setState({ errorStatus: -1 });
            alert('Usuário cadastrado com sucesso!');
            this.setState({ redirect: true });
        }
    }

    renderRedirect() {
        if (this.state.redirect) {
            return (
                <Redirect to="/singleplayer" />
            )
        }
    }

    render() {
        return (
            <>
            <BackButton page="/" />
            <section className="general-section">
                <div className="general-box">
                    <h1 className="general-title-form">Registrar! =)</h1>
                    <form className="form-general">
                        {this.state.errorStatus === 0 && <p className="ms-err">{this.state.errorMessage[0]}</p>}
                        {this.state.errorStatus === 2 && <p className="ms-err">{this.state.errorMessage[2]}</p>}

                        <label htmlFor="input-nickname">Nome de usuário</label>
                        <input
                            type="text"
                            id="input-nickname"
                            className="general-input-place"
                            placeholder="Digite seu nick (nome de usuário)..."
                            onChange={event => this.renderNickName(event)} />

                        <label htmlFor="input-email">Email</label>
                        <input
                            type="email"
                            id="input-email"
                            className="general-input-place"
                            placeholder="Digite seu Email..."
                            onChange={event => this.renderEmail(event)} />

                        <label htmlFor="input-password">Senha</label>
                        <input
                            type="password"
                            className="general-input-place"
                            placeholder="Digite sua senha..."
                            onChange={event => this.renderPassword(event)} />

                        <label htmlFor="input-password">Confirmar senha</label>
                        <input
                            type="password"
                            className="general-input-place"
                            placeholder="Digite sua senha novamente..."
                            onChange={event => this.renderConfirmPassword(event)} />

                        {this.state.errorStatus === 1 && <p className="ms-err">{this.state.errorMessage[1]}</p>}

                        <button
                            className="general-button-white-to-pink"
                            onClick={(event) => this.validations(event)}>
                            Registrar
                        </button>
                        {this.state.redirect && this.renderRedirect()}
                    </form>
                </div>
            </section>
            </>
        )
    }
};