import React from 'react';
import './formsControls.css'

export const Input = ({input, meta, ...props}) => {
        return (
                <div className='input-form'>
                        <input {...input} {...props}/>
                        {meta.touched && meta.error && <span className='error'>{meta.error}'</span>}
                </div>
        )
}