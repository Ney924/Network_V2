import React from 'react';
import './MyPhotos.css';
import PhotosItem from './OnePhoto/OnePhoto';

const MyPhotos = (props) => {
	const PhotosElement = props.photoData.map((i) => <PhotosItem key={i.id} photo={i.photo}/>)
	return (
		<div className='my-photos-container'>
			<div>
				<h3>Фотографии</h3>
			</div>
			<div className='my-photos'>
				{PhotosElement}
			</div>
		</div>
	)
}

export default MyPhotos;