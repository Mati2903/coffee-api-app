"use client";
import { useState } from "react";
import Cards from "./Cards";

const Main = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		setIsVisible(true);
	};

	return (
		<>
			{isVisible ? <Cards /> : <></>}
			<div className="h-screen">
				<img
					src="./coffee-beans.jpg"
					className={`object-cover fixed w-full h-full z-0 top-0 ${
						isVisible ? "opacity-80 blur-sm" : ""
					}`}
				/>
				<button
					className={`absolute left-1/4 top-2/4 px-10 py-3 border-2 rounded-md text-white bg-amber-900 hover:bg-amber-700 ${
						isVisible ? "opacity-0" : "opacity-100"
					}`}
					onClick={handleClick}
				>
					Check coffee types
				</button>
			</div>
		</>
	);
};

export default Main;
