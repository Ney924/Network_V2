import React from 'react';
import '../ProfileDataUsers/ProfileDataUsers.css';

const ProfileDataUsers = (props) => {

	const Contacts = ({ contacsTitle, contactsValue }) => {
		return (
			<div>
				<b>{contacsTitle}:</b>  {contactsValue}
			</div>
		)
	}

	return (
		<div className='profile-info-container'>
			<div className='profile-info'>
				<div className='profile-info-name'>{props.profile.fullName}</div>
				<div className='profile-info-item'>28 лет</div>
				<div className='profile-info-item'>мужчина</div>
			</div>
			<div className='profile-contacts'>
				<div className='profile-info-item'>Ищу работу: {props.profile.lookingForAJob ? 'да' : 'нет'}</div>
				<div className='profile-info-item'>Мои умения и навыки: {props.profile.lookingForAJobDescription}</div>
				<div className='profile-info-item'>Обо мне: {props.profile.aboutMe}</div>
				<div className='profile-info-item-contacts'>{Object.keys(props.profile.contacts).map(key => {
					return <Contacts key={key} contacsTitle={key} contactsValue={props.profile.contacts[key]} />
				})}
				</div>
			</div>
		</div>
	)
}

export default ProfileDataUsers;