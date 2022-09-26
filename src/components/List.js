import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

function List() {
    return (
        <div>
            <h3>Transactions</h3>
            <ul>
                <li>
                    <div>
                        <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <div>
                        <h4>Salary</h4>
                        <h6>Income</h6>
                    </div>
                    <div>
                        €1800
                    </div>
                    <button>x</button>
                </li>
            </ul>
        </div>
    )
}

export default List;