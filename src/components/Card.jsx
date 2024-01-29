import {
	Nutrition,
	ListItem,
	Hero,
	PageIntro,
	Prep,
	Ingredients,
	Divider,
	Instructions,
} from './index';
import { ingredients } from '../data';
const Card = () => {
	return (
		<div className='grid grid-cols-1 bg-white lg:rounded-3xl w-full max-w-[736px] mx-auto'>
			<Hero />
			<main className='min-h-screen w-full grid grid-cols-1 gap-y-8 lg:gap-y-10 align-center px-8 lg:p-10 mt-10 lg:mt-0'>
				<PageIntro />
				<Prep />
				<Ingredients />
				<Divider />
				<Instructions />
				<Divider />
				<Nutrition />
			</main>
		</div>
	);
};

export default Card;
