import React from "react";
import "../index.css";
import Row from "./Row";

const blocks = ["LTC","FW", "LBC", "BlockSV", "BlockSH", "Empty", "RBC", "RTC"];

const PlayingBoard = () => {
	//console.log(blocks);
	let rows = [];
	for (let r = 0; r < 4; r++) {
		//console.log('in the r loop');
		let newRow = [];
		let y;
		for (let x = 0; x < 5; x++) {
			let randomPick = Math.floor(Math.random() * 7);
			//console.log(randomPick);
			//console.log(blocks[randomPick]);
			newRow[x] = blocks[randomPick];
			//console.log(rows[r][x]);
			console.log(newRow);
			if (r===0) {newRow[0] = "LTC";newRow[4]= "RTC"}
			if (r===3) {newRow[0] = "LBC";newRow[4]= "RBC"}
			 
			
		}
		
		rows.push(newRow);
	}
	console.log(`rows: `,rows);

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
