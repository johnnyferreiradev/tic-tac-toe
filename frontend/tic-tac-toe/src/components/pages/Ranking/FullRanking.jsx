import React from 'react';

import Ranking from '../../Main/Ranking/Ranking';
import Title from '../../templates/Title/Title';

import './FullRanking.css';

const FullRanking = (props) => {
    return (
        <div className="container-full-ranking">  
            <Title title="Ranking" />
            <Ranking limit={10} buttons={true}/>
        </div>
    )
}

export default FullRanking;