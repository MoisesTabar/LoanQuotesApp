import React from 'react';

function Form(){
    return(
        <div className="form-container">
            <form className="form">

                <p className="subtitle is-5">Quantity</p>
                <div className="control">
                    <input className="input is-rounded" type="number" placeholder="Example: 3000" />
                </div>

                <p className="subtitle is-5">Date to pay</p>
                <div className="select is-rounded">
                    <select>
                        <option value="">Select</option>
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                        <option value="12">12 Months</option>
                        <option value="24">24 Months</option>
                    </select>
                </div>

                <button className="button is-info">Calculate</button>
            </form>
        </div>
    )
}

export default Form;