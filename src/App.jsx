import {
	Hero,
	Ingredients,
	Instructions,
	ListItem,
	Nutrition,
	Prep,
} from './components';
import { ingredients } from './data';
const App = () => {
	return (
		<>
			<div className='grid grid-cols-1 bg-white lg:rounded-3xl w-full max-w-[736px] mx-auto'>
				<header className='lg:p-10'>
					<figure>
						<img
							src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
							alt='Shoes'
							className='w-full lg:rounded-3xl'
						/>
					</figure>
				</header>
				<main className='w-full grid grid-cols-1 gap-y-8 lg:gap-y-10 align-center px-8 lg:p-10 mt-10 lg:mt-0'>
					<section className='grid grid-col-1 gap-y-6'>
						<h1 className='font-normal text-4xl text-left text-black leading-9'>
							Simply Omelette recipe
						</h1>
						<p className='font-normal text-base text-base-300 leading-6'>
							An easy and quick dish, perfect for any meal. This classic
							omelette combines beaten eggs cooked to perfection, optionally
							filled with your choice of cheese, vegetables, or meats.
						</p>
					</section>
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
				</main>
			</div>
		</>
	);
};

export default App;
