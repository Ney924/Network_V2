import React, { useState } from 'react';
import Preloader from '../../common/preloader/Preloader';
import './ProfifeInfo.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import Avatar from './../../image/no_avatar.png';
import ProfileDataUsers from './ProfileDataUsers/ProfileDataUsers';
import ProfileDataUsersForm from './ProfileDataUsersForm/ProfileDataUsersForm';

const ProfifeInfo = (props) => {

	const [editMode, setEditMode] = useState(false)

	const addPhoto = (e) => {
		if (e.target.files.length) {
			props.saveFotoTC(e.target.files[0])
		}
	}

	const GoToEditMode = () => {
		setEditMode(false)
	}

	const onSubmit = (FormData) => {
		props.saveProfileDataTC(FormData).then(() => setEditMode(false));
	}

	return (
		props.profile == null ?
			<Preloader /> :
			<div className='profile'>
				<div className='description'>
					<img className='ava' src={props.profile.photos.large == null || undefined ? Avatar : props.profile.photos.large} />
					{!editMode
						? <ProfileDataUsers profile={props.profile} />
						: <ProfileDataUsersForm
							initialValues={props.profile}
							profile={props.profile}
							GoToEditMode={GoToEditMode}
							onSubmit={onSubmit} />}
					<div className='photos-profile'>
						{props.isOwner && <input
							type={'file'}
							id='file'
							onChange={addPhoto} />}              				{/*чтобы привязать label к input мы задаём for по id, которыйзадан input-у*/}
						<label for='file'>Добавить аватар</label>
					</div>
					{props.isOwner && !editMode && <button
						className='profile-info-button'
						onClick={() => setEditMode(true)}>
						Редактировать
					</button>}
				</div>
				<ProfileStatus
					status={props.status}
					updateUserStatusTC={props.updateUserStatusTC} />
			</div>
	);
}

export default ProfifeInfo;