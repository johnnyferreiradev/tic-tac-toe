import React from 'react';
import { Redirect } from 'react-router-dom';

import './BackButton.css';

class BackButton extends React.Component {

    state = {
        redirect: false
    }

    renderRedirect(page) {
        if(this.state.redirect) {
            return (
                <Redirect
                    to={page}
                />
            )
        }
    }

    render() {
        return (
            <div className="back-btn-container">
                <button onClick={elem => this.setState({ redirect: true })}>&#65513;</button>
                {this.renderRedirect(this.props.page)}
            </div>
        )
    }
}

export default BackButton;