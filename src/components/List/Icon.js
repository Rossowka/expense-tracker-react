import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faHouse, faQuestion, faMartiniGlassCitrus, faCartShopping } from '@fortawesome/free-solid-svg-icons'

import './styles.scss';

function Icon({ category }) {
    const chooseIcon = (category) => {
        switch(category) {
            case 'Income':
                return faCoins;
            case 'Immediate Obligations':
                return faHouse;
            case 'True Expenses':
                return faCartShopping;
            case 'Quality of Life':
                return faMartiniGlassCitrus;
            default:
                return faQuestion;
        }
    }

    return (
        <div className='icon'>
            <FontAwesomeIcon
                icon={chooseIcon(category)}
                size="xl"
            />
        </div>
    )
}

export default Icon;