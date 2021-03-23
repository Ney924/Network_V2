import React from 'react';
import { createFielfInput, Input } from '../../../common/formsControls/formsControls';
import { reduxForm } from 'redux-form'
import './ProfileDataUsersForm.css'
import ContactsForm from './ContactsForm';

const ProfileDataUsersForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>

			<div >
				<div>
					<div className='item'>
						Имя полтзователя:
						{createFielfInput('Имя', Input, 'fullName', null, null)}
					</div>
				</div>
				<div>
					<div className='item'>
						В поиске работы?
						{createFielfInput('В поиске работы?', 'input', 'lookingForAJob', null, 'checkbox')}
					</div>
					<div className='item'>
						Мои умения и навыки:
						{createFielfInput('В поиске работы?', Input, 'lookingForAJobDescription', null, 'null')}
					</div>
					<div className='item'>
						Обо мне:
						{createFielfInput('Обо мне', Input, 'aboutMe', null, 'null')}
					</div>
					<div> {Object.keys(props.profile.contacts).map(key => {
						return <ContactsForm key={key} contacsTitle={key} />
					})}
					</div>
				</div>
			</div>

			<div>
				<button className='profile-info-button' >Сохранить</button>
				{props.error && <div>{props.error}</div>}
			</div>

		</form>
	)
}

const ProfileDataUsersFormContainer = reduxForm({ form: 'edit-profile' })(ProfileDataUsersForm)

export default ProfileDataUsersFormContainer;


