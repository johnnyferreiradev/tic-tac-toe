import React from 'react';
import Board from '../../Main/Board/Board';

export default class GameSingle extends React.Component {
    render(){
        return (
            <Board gamemode="single"/>
        )
    }
}