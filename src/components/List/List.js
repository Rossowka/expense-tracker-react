import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faTrashCan, faHouse } from '@fortawesome/free-solid-svg-icons'

import './styles.scss';

function List() {
    return (
        <div>
            <h3>Transactions</h3>
            {/* -- Dummy Data -- */}

            <dl>
                <div className='icon'>
                    <FontAwesomeIcon icon={faCoins} size="xl"/>
                </div>
                <div className='text'>
                    <dt>Salary</dt>
                    <dd>Income</dd>
                </div>
                <div className='money positive'>
                    <dt>€1800</dt>
                </div>
                <button>
                    <FontAwesomeIcon icon={faTrashCan} size="sm"/>
                </button>
            </dl>

            <dl>
                <div className='icon'>
                    <FontAwesomeIcon icon={faHouse} size="xl"/>
                </div>
                <div className='text'>
                    <dt>Rent</dt>
                    <dd>Immediate Obligations</dd>
                </div>
                <div className='money negative'>
                    <dt>-€800</dt>
                </div>
                <button>
                    <FontAwesomeIcon icon={faTrashCan} size="sm"/>
                </button>
            </dl>
            
        </div>
    )
}

export default List;