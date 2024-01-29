import { Nutrition, ListItem, Hero, PageIntro, Prep } from './index';
import { ingredients } from '../data';
const Card = () => {
	return (
		<div className='grid grid-cols-1 bg-white lg:rounded-3xl w-full max-w-[736px] mx-auto'>
			<Hero />
			<main className='w-full grid grid-cols-1 gap-y-8 lg:gap-y-10 align-center px-8 lg:p-10 mt-10 lg:mt-0'>
				<PageIntro />
				<Prep />

				<section>
					<h2>Ingredients</h2>
					<ul>
						{ingredients.map((listItem) => {
							return <ListItem key={listItem.id} {...listItem} />;
						})}
					</ul>
				</section>
				<Nutrition />
			</main>
		</div>
	);
};

export default Card;
