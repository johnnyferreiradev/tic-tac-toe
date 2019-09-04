import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Register extends Component {
    state = {
        nickName: '',
        email: '',
        password: '',
        confirmPassword: '',
        errorStatus: -1,
        errorMessage: [
            'Preencha todos os campos!',
            'Senhas não conferem'
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
        if(nickName === '' || email === '' || password === '' || confirmPassword == '') {
            this.setState({ errorStatus: 0 });
            return;
        }

        if(this.passwordsCheck() === false) {
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
            console.log('erro no cadastro');
            // this.setState({ errorMessage: true });
        } else {
            console.log('cadastrado com sucesso');
            // this.setState({ playerId: response.data.id });
            // this.setState({ redirect: true });
        }
    }

    // renderRedirect() {
    //     if (this.state.redirect) {
    //         return (
    //             <Redirect to="/singleplayer" />
    //         )
    //     }
    // }

    render() {
        return (
            <section className="general-section">
                <div className="general-box">
                    <h1 className="general-title-form">Registrar! =)</h1>
                    <form className="form-general">

                        <label htmlFor="input-email">Email</label>
                        <input type="email" id="input-email" className="general-input-place" placeholder="Digite seu Email..." />

                        <label htmlFor="input-password">Senha</label>
                        <input type="password" className="general-input-place" placeholder="Digite sua senha..." />

                        <label htmlFor="input-password">Senha</label>
                        <input type="password" className="general-input-place" placeholder="Digite sua senha novamente..." />

                        {this.state.errorStatus === 1 && <p className="ms-err">{this.state.errorMessage[1]}</p>}

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
    }
};