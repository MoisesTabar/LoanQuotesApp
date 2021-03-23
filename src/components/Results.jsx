import React from 'react';

function Results(props){
    const { total, date, cuantity } = props;
    return(
        <article className="message is-success">
            <div className="message-body">
                <p>Success, the total to pay is:</p>
                ${total}
                <p>Cuantity to pay:</p>
                ${cuantity}
                <p>Due date:</p>
                {date} Months
            </div>
        </article>
    )
}

export default Results;