import React from "react";
import "../index.css";
import Wafel from "./Wafel";
import { createStroopWafels } from "../checkBlocks/pickRandomBlock";

const StroopWafels = (block) => {
	let positions = createStroopWafels(block);
	let horiz = Object.entries(positions.horiz);
	let vert = Object.entries(positions.vert);
	let stroopwafels = [];
	horiz.forEach((each) => {stroopwafels.push(each[1]);});
	vert.forEach((each) => {stroopwafels.push(each[1]);});

	return (
		<>
			{stroopwafels.map((wafel) => {
				return <Wafel wafel={wafel} />;
			})}
		</>
	);
};

export default StroopWafels;
