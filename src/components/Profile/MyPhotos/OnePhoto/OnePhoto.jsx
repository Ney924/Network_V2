import React from 'react';

const PhotosItem = (props) => {
	return (
		<div className='one-photo'> <img src={props.photo}/> </div>
	)
}

export default PhotosItem;