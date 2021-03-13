import React from 'react';
import { Field } from 'redux-form';
import './formsControls.css'

export const Input = ({ input, meta, ...props }) => {
        return (
                <div className='input-form'>
                        <input {...input} {...props} />
                        {meta.touched && meta.error && <span className='error'>{meta.error}'</span>}
                </div>
        )
}

export const createFielfInput = (placeholder, component, name, className, type) => {
        return (
                <Field
                        placeholder={placeholder}
                        component={component}
                        name={name}
                        className={className}
                        type={type}
                />
        )

}