const Card = ({ title, description, ingredients, imgUrl }) => {
	return (
		<div className="max-w-sm md:max-w-xl bg-white border-0 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-12 mx-5 md:flex z-10">
			<div className="md:w-2/4 overflow-hidden flex rounded-t-lg md:rounded-l-lg md:rounded-r-none">
				<img className="w-full object-cover" src={imgUrl} />
			</div>
			<div className="px-6 py-4 flex-1">
				<div className="font-bold text-xl mb-2">{title}</div>
				<p className="text-gray-700 text-base">{description}</p>
				<ul className="max-w-md my-4 space-y-1 text-gray-600 list-disc list-inside dark:text-gray-400">
					Ingredients:
					{ingredients.map((item) => {
						return <li>{item}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default Card;
