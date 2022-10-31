import { React, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp, faCircleDown } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../../context/GlobalState';

function AddTransaction() {
    const { addTransaction } = useContext(GlobalContext);

    const { register, handleSubmit, watch, reset } = useForm({
        defaultValues: {
            type: 'outflow',
            payee: '',
            amount: '',
            category: ''
        }
    });

    const onSubmit = data => {
        const newTransaction = {
            id: Date.now(),
            type: data.type,
            payee: data.payee,
            amount: data.type === 'outflow' ? Number(data.amount * -1) : Number(data.amount),
            category: data.category ? data.category : 'Unknown'
        }
        console.log(newTransaction);

        addTransaction(newTransaction);
        reset({payee: '', amount: '', type: 'outflow', category: ''})
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='type'>
                    <input
                        {...register('type', {required: true})}
                        type='radio'
                        value='outflow'
                        id='outflow'
                        checked={watch('type') === 'outflow'}
                    />
                    <label htmlFor='outflow'><FontAwesomeIcon icon={faCircleUp} />Expense</label>
                    <input
                        {...register('type', {required: true})}
                        type='radio'
                        value='inflow'
                        id='inflow'
                        checked={watch('type') === 'inflow'}
                    />
                    <label htmlFor='inflow'><FontAwesomeIcon icon={faCircleDown} />Income</label>
                </div>
                <input
                    {...register('payee', {required: true, maxLength: 30})}
                    type='text'
                    placeholder='Payee'
                />
                <input
                    {...register('amount', {required: true, maxLength: 100})}
                    type='number'
                    placeholder='Amount'
                />
                <select {...register('category')}>
                    <option value='' disabled>Category</option>
                    <option value='Income'>Income</option>
                    <option value='Immediate Obligations'>Immediate Obligations</option>
                    <option value='True Expenses'>True Expenses</option>
                    <option value='Quality of Life'>Quality of Life</option>
                    <option value='Unknown'>Unknown</option>
                </select>

                <input type='submit' />
            </form>
        </div>
    )
}

export default AddTransaction;