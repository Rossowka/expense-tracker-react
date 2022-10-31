import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon';

import './styles.scss';
import styles from './../../_base.module.scss';

function Transaction({ transaction }) {
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <div className='element'>
            <Icon category={transaction.category} />
            <div className='text'>
                <dt>{transaction.payee}</dt>
                <dd>{transaction.category}</dd>
            </div>
            <div
                className='money'
                style={{color: transaction.amount < 0 ? styles.negativeColor : styles.positiveColor}}>
                <dt>{sign}€{Math.abs(transaction.amount)}</dt>
            </div>
            <button>
                <FontAwesomeIcon icon={faTrashCan} size="sm"/>
            </button>
        </div>
    )
}

export default Transaction;