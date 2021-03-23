import React, { useState } from 'react';
import Error from './Error';
import { budgetHelper } from '../helpers/budget';

function Form(props){
    const { cuantity, saveCuantity, date, saveDate, total, saveTotal } = props;
    const [ error, SetError ] = useState(false);

    /**
     * Validates empty input and calculates the cuantity and date
     * @param {*} e the event  
     */
    const calculate = (e) => {
        e.preventDefault();

        if(cuantity === 0 || date === ''){
            SetError(true);
            return;
        }

        //if the user reverts the error set the error state to false
        SetError(false);

        //calculation
        const total = budgetHelper(cuantity, date);
        saveTotal(total);
    }

    return(
        <div className="form-container">
            <form onSubmit={calculate} className="form">

                <p id="subtitle" className="subtitle is-5">Cuantity</p>
                <div className="control">
                    <input className="input is-rounded" onChange={e => saveCuantity(parseInt(e.target.value))} type="number" placeholder="Example: 3000" />
                </div>

                <p id="subtitle" className="subtitle is-5">Date to pay</p>
                <div className="select is-rounded">
                    <select onChange={e => saveDate(parseInt(e.target.value))}>
                        <option value="">Select</option>
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                        <option value="12">12 Months</option>
                        <option value="24">24 Months</option>
                    </select>
                </div>

                <button className="button is-info">Calculate</button>
            </form>

            {error ? <Error>Fill all fields please</Error> : null}
        </div>
    )
}

export default Form;