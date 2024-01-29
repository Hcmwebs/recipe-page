import HeroImage from '../assets/image-omelette.jpeg';

const Hero = () => {
	return (
		<header className='lg:p-10'>
			<figure>
				<img
					src={HeroImage}
					alt='Omelette on a plate'
					className='w-full lg:rounded-3xl'
				/>
			</figure>
		</header>
	);
};

export default Hero;
