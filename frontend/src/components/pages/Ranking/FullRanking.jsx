import React from 'react';

import Ranking from '../../Main/Ranking/Ranking';
import Title from '../../templates/Title/Title';
import BackButton from '../../templates/BackButton/BackButton';

import './FullRanking.css';

const FullRanking = (props) => {
    return (
        <div className="container-full-ranking">
            <BackButton page="/singleplayer" />
            <Title title="Ranking" />
            <Ranking limit={10} buttons={true}/>
        </div>
    )
}

export default FullRanking;