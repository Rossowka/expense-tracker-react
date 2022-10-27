import { React } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp, faCircleDown } from '@fortawesome/free-solid-svg-icons'

function AddTransaction() {
    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            type: 'outflow',
            payee: '',
            amount: '',
            category: ''
        }
    });
    const onSubmit = data => console.log(data);

    // const payee = watch('payee');
    // const amount = watch('amount');
    // const category = watch('category');

    // console.log(payee, amount, category);

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
                    <option value='Obligations'>Immediate Obligations</option>
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