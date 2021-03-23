import React from 'react';
import { createFielfInput, Input } from '../../../common/formsControls/formsControls';

const ContactsForm = ({ contacsTitle }) => {
        return (
                <div className='item'>
                        <div>{contacsTitle}:</div>
                        <div>
                                {createFielfInput(contacsTitle, Input, 'contacts.' + contacsTitle, null, null)}
                        </div>
                </div>
        )
}

export default ContactsForm;