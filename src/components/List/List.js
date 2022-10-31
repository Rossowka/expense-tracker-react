import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../../context/GlobalState';
import Icon from './Icon';

import './styles.scss';
import styles from './../../_base.module.scss';

function List() {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>Transactions</h3>
            <dl>
                {transactions.map(transaction => (
                    <div className='element'>
                        <Icon category={transaction.category} />
                        <div className='text'>
                            <dt>{transaction.payee}</dt>
                            <dd>{transaction.category}</dd>
                        </div>
                        <div
                            className='money'
                            style={{color: transaction.amount < 0 ? styles.negativeColor : styles.positiveColor}}
                        >
                            <dt>€{transaction.amount}</dt>
                        </div>
                        <button>
                            <FontAwesomeIcon icon={faTrashCan} size="sm"/>
                        </button>
                    </div>
                ))}
            </dl>
        </div>
    )
}

export default List;