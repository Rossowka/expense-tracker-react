import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Transaction from './Transaction';

import './styles.scss';

function List() {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>Transactions</h3>
            <dl>
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </dl>
        </div>
    )
}

export default List;