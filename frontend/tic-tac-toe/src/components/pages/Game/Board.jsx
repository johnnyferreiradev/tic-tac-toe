import './Board.css';

import React from 'react';
import Field from '../Game/Field';

const Board = () => (
    <div className="board">
        <Field className="northwest-field"/>
        <Field className="north-field"/>
        <Field className="northeast-field"/>
        <Field className="west-field"/>
        <Field className="center-field"/>
        <Field className="east-field"/>
        <Field className="southwest-field"/>
        <Field className="south-field"/>
        <Field className="southeast-field"/>
    </div>
);

export default Board;