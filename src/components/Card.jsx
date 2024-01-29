import { Nutrition, ListItem, Hero, PageIntro } from './index';
import { ingredients } from '../data';
const Card = () => {
	return (
		<div className='grid grid-cols-1 bg-white lg:rounded-3xl w-full max-w-[736px] mx-auto'>
			<Hero />
			<main className='w-full grid grid-cols-1 gap-y-8 lg:gap-y-10 align-center px-8 lg:p-10 mt-10 lg:mt-0'>
				<PageIntro />
				<section className='bg-neutral p-10 grid grid-cols-1 gap-y-4 rounded-xl '>
					<h2 className='text-xl text-secondary font-semibold'>
						Preparation time
					</h2>
					<ul className='list-outside list-disc'>
						<li className='pl-4 text-base-300'>
							<span className='font-bold'>Lorem ipsum: </span>
							Lorem ipsum dolor sit amet.
						</li>
						<li className='pl-4 text-base-300'>
							<span className='font-bold'>Lorem ipsum: </span>
							Lorem ipsum dolor sit amet.
						</li>
						<li className='pl-4 text-base-300'>
							<span className='font-bold'>Lorem ipsum: </span>
							Lorem ipsum dolor sit amet.
						</li>
					</ul>
				</section>
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
