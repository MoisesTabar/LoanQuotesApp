import React from 'react';

function Error({ children }){
    return (
        <article className="message is-danger">
            <div className="message-body">
                { children }
            </div>
        </article>
    )
}

export default Error;