import { instructions } from '../data';
import { Title, ListItem } from './index';

const Instructions = () => {
	return (
		<section className='grid grid-cols-1 gap-y-6'>
			<Title text='Instructions' />
			<ol className='list-outside list-decimal grid gap-y-2 pl-4'>
				{instructions.map((listItem) => {
					return <ListItem key={listItem.id} {...listItem} />;
				})}
			</ol>
		</section>
	);
};

export default Instructions;
