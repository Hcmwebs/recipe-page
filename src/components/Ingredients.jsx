import { ingredients } from '../data';
import { Title, ListItem } from './index';

const Ingredients = () => {
	return (
		<section className='grid grid-cols-1 gap-y-6'>
			<Title text='ingredients' />
			<ul className='list-outside list-disc grid gap-y-2 pl-4'>
				{ingredients.map((listItem) => {
					return <ListItem key={listItem.id} {...listItem} />;
				})}
			</ul>
		</section>
	);
};

export default Ingredients;
