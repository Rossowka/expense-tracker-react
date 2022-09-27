import React from 'react';

import './styles.scss';

function IncomeExpenses() {
    return (
        <div className='container'>
            <div>
                <h4>Income</h4>
                <p  className='money'>€ 0.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p  className='money'>€ 0.00</p>
            </div>
        </div>
    )
}

export default IncomeExpenses;