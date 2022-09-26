import { React } from 'react';
import { useForm } from 'react-hook-form';

function AddTransaction() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            type: '',
            payee: '',
            amount: '',
            category: ''
        }
    });
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        {...register('type', {required: true})}
                        type='radio'
                        value='outflow'
                    />
                    <input
                        {...register('type', {required: true})}
                        type='radio'
                        value='inflow'
                    />
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