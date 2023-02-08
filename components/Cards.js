import { useState, useEffect } from "react";
import Card from "./Card";

const Cards = () => {
	const [data, setData] = useState("");

	const getData = async () => {
		const resp = await fetch("https://api.sampleapis.com/coffee/hot");
		const json = await resp.json();
		setData(json);
		console.log(data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="flex flex-col items-center mt-40">
			{Object.values(data).map((coffee) => {
				return (
					<Card
						key={coffee.id}
						title={coffee.title}
						description={coffee.description}
						ingredients={coffee.ingredients}
						imgUrl={coffee.image}
					/>
				);
			})}
		</div>
	);
};

export default Cards;
