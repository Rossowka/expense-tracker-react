import React from 'react';

import styles from './../../_base.module.scss';

function Balance({ balance }) {
  return (
    <div>
        <h4>Your Balance</h4>
        <h1 style={{color: balance < 0 ? styles.negativeColor : styles.positiveColor}}>€ {balance}</h1>
    </div>
  )
}

export default Balance;