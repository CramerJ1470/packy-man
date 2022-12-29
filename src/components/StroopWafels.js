import React from "react";
import "../index.css";
import Wafel from "./Wafel";
import { createStroopWafels } from "../checkBlocks/pickRandomBlock";

const StroopWafels = (block) => {
	let positions = createStroopWafels(block);
	console.log(`positions: `, positions);
	let horiz = Object.entries(positions.horiz);
	let vert = Object.entries(positions.vert);
	let stroopwafels = [];
	horiz.forEach((each) => {stroopwafels.push(each[1]);});
	vert.forEach((each) => {stroopwafels.push(each[1]);});

	console.log(`stroopwafels: `,stroopwafels);
	return (
		<>
			{stroopwafels.map((wafel) => {
				return <Wafel wafel={wafel} />;
			})}
		</>
	);
};

export default StroopWafels;
