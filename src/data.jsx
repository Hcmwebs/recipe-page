const preparation = [
	{ id: 1, span: 'Total :', text: 'Approximately 10 minutes' },
	{ id: 2, span: 'Preparation :', text: '5 minutes' },
	{ id: 3, span: 'Cooking :', text: '5 minutes' },
];
const ingredients = [
	{ id: 1, span: '', text: '2-3 large eggs' },
	{ id: 2, span: '', text: 'Salt, to taste' },
	{ id: 3, span: '', text: 'Pepper, to taste' },
	{ id: 4, span: '', text: '1 tablespoon of butter or oil' },
	{
		id: 5,
		span: 'Optional fillings',
		text: 'cheese, diced vegetables, cooked meats, herbs',
	},
];
const instructions = [
	{
		id: 1,
		span: 'Beat the eggs :',
		text: 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
	},
	{
		id: 2,
		span: 'Heat the pan :',
		text: 'Place a non-stick frying pan over medium heat and add butter or oil.',
	},
	{
		id: 3,
		span: 'Cook the omelette :',
		text: 'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
	},
	{
		id: 4,
		span: 'Add fillings (optional) :',
		text: 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
	},
	{
		id: 5,
		span: 'Fold and serve :',
		text: 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
	},
	{
		id: 6,
		span: 'Enjoy :',
		text: 'Serve hot, with additional salt and pepper if needed.',
	},
];

const tableData = [
	{ id: 1, tdNormal: 'calories', tdBold: '277kcal' },
	{ id: 2, tdNormal: 'carbs', tdBold: '0g' },
	{ id: 3, tdNormal: 'proteins', tdBold: '20g' },
	{ id: 4, tdNormal: 'fat', tdBold: '22g' },
];

export { preparation, ingredients, instructions, tableData };
