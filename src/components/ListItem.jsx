const ListItem = ({ span, text }) => {
	return (
		<li className='pl-4 text-base-300'>
			<span className='font-bold'>{span} </span>
			{text}
		</li>
	);
};

export default ListItem;
