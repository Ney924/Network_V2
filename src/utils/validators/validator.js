import './validator.css'

export const required = (value) => {
	if (value) return undefined;
	return (
		<div className='required'>
			Поле обязательное для заполнения !!!
		</div>
	);
}

export const maxLenghtCreator = (maxlenght) => (value) => {
	if (value.length > maxlenght) return (
		<div className='required'>
			Максимальная длина поста {maxlenght} символов !!!
		</div>
	);
	return undefined;
}


