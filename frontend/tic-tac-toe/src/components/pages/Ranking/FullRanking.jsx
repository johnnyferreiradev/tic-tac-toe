import React from 'react';

import Ranking from '../../Main/Ranking/Ranking';
import Title from '../../templates/Title/Title';

const FullRanking = (props) => {
    return (
        <>  
            <Title title="Ranking" />
            <Ranking limit={10} buttons={true}/>
        </>
    )
}

export default FullRanking;