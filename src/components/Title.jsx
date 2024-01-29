import React from 'react';

const Title = ({ text }) => {
	return (
		<h2 className='font-normal capitalize text-3xl text-primary leading-7'>
			{text}
		</h2>
	);
};

export default Title;
