import { Hero, Ingredients, Instructions, Nutrition, Prep } from './components';
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
				<main className='w-full grid grid-cols-1 gap-y-8 align-center px-8 lg:p-10 mt-10 lg:mt-0'>
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
					<section>
						<h2 className='text-2xl text-secondary'>Preparation:</h2>
						<ul>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
						</ul>
					</section>
				</main>
			</div>
		</>
	);
};

export default App;
