import { Table, Title } from './index';

const Nutrition = () => {
	return (
		<section className='grid grid-cols-1 gap-y-6'>
			<Title text='Nutrition' />
			<p className='font-normal text-base text-base-300 leading-6'>
				The table below shows nutritional values per serving without the
				additional fillings.
			</p>
			<Table />
		</section>
	);
};

export default Nutrition;
