import React from 'react';

export default class GameMulti extends React.Component {
    componentDidMount() {
        const { state } = this.props.location; // Recebe atravez do Link
        console.log(state);
    }

    render(){
        return (
            <h1>Pagina do game mode 2 - Multiplayer</h1>
        )
    }
}