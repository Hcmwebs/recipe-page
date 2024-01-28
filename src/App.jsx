import { Hero, Ingredients, Instructions, Nutrition, Prep } from './components';
const App = () => {
	return (
		<>
			<div className='grid grid-cols-1 gap-y-8 lg:gap-y-10 bg-white lg:rounded-3xl'>
				<header className='lg:p-10'>
					<figure>
						<img
							src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
							alt='Shoes'
							className='w-full lg:rounded-3xl'
						/>
					</figure>
				</header>
				<main className='grid grid-cols-1 gap-y-8 align-center px-8 lg:p-10 -mt-4 lg:-mt-10'>
					<Hero />
					<Prep />
					<Ingredients />
					<Instructions />
					<Nutrition />
				</main>
			</div>
		</>
	);
};

export default App;
