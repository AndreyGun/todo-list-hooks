import React from 'react';

export const Form = () => {
    return(
        <form>
            <div className="form-group">
                <input 
                    className="form-control"
                    type="text"
                    placeholder="enter notes"
                 />
            </div>
        </form>
    );
}