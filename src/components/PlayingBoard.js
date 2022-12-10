import React from "react";
import "../index.css";
import Row from "./Row";

const blocks = [
	"BotT",
	"LTC",
	"FW",
	"LBC",
	"BlockSV",
	"BlockSH",
	"Empty",
	"RBC",
	"RTC",
	"TopT",
	"LeftT",
	"RightT",
];
function pickRandomBlock() {
	let randomPick = Math.floor(Math.random() * 12);
	return blocks[randomPick];
}

const PlayingBoard = () => {
	//console.log(blocks);

	let rows = [];
	for (let y = 0; y < 5; y++) {
		//console.log('in the r loop');
		let newRow = [];

		for (let x = 0; x < 9; x++) {
			if (y === 0) {
				newRow[0] = "LTC";
				newRow[8] = "RTC";
			}
			if (y === 4) {
				newRow[0] = "LBC";
				newRow[8] = "RBC";
			}
			newRow[x] = pickRandomBlock();
			/*newRow[x].good = false;
			
*/
			console.log(newRow);
		}

		rows.push(newRow);
	}
	console.log(`rows: `, rows);

	return (
		<>
			{rows.map((pa, index) => {
				console.log(`pa: `, pa, index);
				return <Row key={index} row={pa} />;
			})}
		</>
	);
};

export default PlayingBoard;
