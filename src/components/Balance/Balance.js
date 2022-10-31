import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import styles from './../../_base.module.scss';

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
        <h4>Your Balance</h4>
        <h1 style={{color: total < 0 ? styles.negativeColor : styles.positiveColor}}>€ {total}</h1>
    </div>
  )
}

export default Balance;