import './Board.css';

import React from 'react';
import Field from '../Game/Field';

const Board = () => (
    <div className="board">
        <Field className="field northwest-field right-limit bottom-limit"/>
        <Field className="field north-field bottom-limit"/>
        <Field className="field northeast-field left-limit bottom-limit"/>
        <Field className="field west-field right-limit"/>
        <Field className="field center-field"/>
        <Field className="field east-field left-limit"/>
        <Field className="field southwest-field right-limit top-limit"/>
        <Field className="field south-field top-limit"/>
        <Field className="field southeast-field left-limit top-limit"/>
    </div>
);

export default Board;