// This code written by John E. Cramer 
	// GAARD 
	// https://github.com/CramerJ1470/packy-man.git
import React from "react";
import "../index.css";
import pickRandomBlock from "../checkBlocks/pickRandomBlock";
import Row from "./Row";


const PlayingBoard = () => {

	let blocks = [];
	for (let x = 0; x < 77; x++) {

		let block = pickRandomBlock(x, blocks);
	
		blocks.push(block);

	}
	let rows = [];
	let newRow = [];
	for (let u = 0; u < blocks.length; u++) {

		if (
			u === 10 ||
			u === 21 ||
			u === 32 ||
			u === 43 ||
			u === 54 ||
			u === 65 ||
			u === 76
		) {

			newRow.push(blocks[u]);
			rows.push(newRow);
			newRow = [];
		} else {
			newRow.push(blocks[u]);

		}
	}


	return (
		<>
			 {rows.map((row, index) => {
			
		return <Row index={index} row={row} />;
})}
		</>
	);
};

export default PlayingBoard;


