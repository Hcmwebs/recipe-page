import { preparation } from '../data';
import { ListItem } from './index';

const Prep = () => {
	return (
		<section className='bg-neutral p-10 grid grid-cols-1 gap-y-4 rounded-xl '>
			<h2 className='text-xl text-secondary font-semibold'>Preparation time</h2>
			<ul className='marker:text-secondary list-outside list-disc grid gap-y-2'>
				{preparation.map((listItem) => {
					return <ListItem key={listItem.id} {...listItem} />;
				})}
			</ul>
		</section>
	);
};

export default Prep;
