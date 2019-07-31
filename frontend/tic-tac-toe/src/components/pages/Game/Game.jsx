import React from 'react';

export default class Game extends React.Component {
    componentDidMount() {
        const { state } = this.props.location; // Recebe atravez do Link
        console.log(state);
    }

    render(){
        return (
            <h1>Pagina do game</h1>
        )
    }
}