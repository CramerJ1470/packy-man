import React from "react";
import "../index.css";
import pickRandomBlock from "../checkBlocks/pickRandomBlock";
import Row from "./Row";
import Eachone from "./Eachone";
import BotT from "./BotT";
import TopT from "./TopT";

const PlayingBoard = () => {
	//console.log(blocks);
	let blocks = [];
	for (let x = 0; x < 77; x++) {
		console.log(`blocks: x`, blocks, x);
		console.log(`x:` + x);
		let block = pickRandomBlock(x, blocks);
		console.log(`returned block:`, block);
		blocks.push(block);
		console.log(blocks);
	}
	let rows = [];
	let newRow = [];
	for (let u = 0; u < blocks.length; u++) {
		console.log(`u: `, u);
		console.log(`blocks: `, blocks);
		console.log(blocks[u]);
		//if (u === 11 || u === 17 || u === 26 || u === 35 || u === 44) { old version
		if (
			u === 10 ||
			u === 21 ||
			u === 32 ||
			u === 43 ||
			u === 54 ||
			u === 65 ||
			u === 76
		) {
			console.log(u, blocks[u]);
			newRow.push(blocks[u]);
			rows.push(newRow);
			newRow = [];
		} else {
			newRow.push(blocks[u]);
			console.log(u, blocks[u]);
		}
	}
	console.log(rows);

	return (
		<>
			 {rows.map((row, index) => {
			console.log(`pa: `, row, index);
			return <Row index={index} row={row} />;
})}
		</>
	);
};

export default PlayingBoard;

/* {blocks.map((row, index) => {
				console.log(`pa: `, row, index);
				return <Row key={index} row={row} />;
			})}*/
