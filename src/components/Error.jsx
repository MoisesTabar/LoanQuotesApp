import React from 'react';

function Error({ children }){
    return (
        <article className="message is-danger">
            <div className="message-body">
                <h1 style={{color: 'red', fontSize: 30}}>400!</h1>
                { children }
            </div>
        </article>
    )
}

export default Error;