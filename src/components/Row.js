import React , {useState} from "react";
import "../index.css";

import Eachone from "./Eachone";
//import updateAllRows from "./PlayingBoard";

// let allColumns = [];
//let allRows= [];
const Row = ({ row, blocks,index }) => {
//	let newColumn =[];
//	let colStart;
//	let colEnd;
	
//	let newRow = [];
//	let end;
//**********Create data that will be used by characters for moving based on the game board************/

// *****************on a given Y the start-end of each row path  **********************
/*	for (let ay = 1; ay < row.length - 1; ay++) {
		let currentBlock = row[ay];
		
		if (
			[ "CornBord", "vertBord", "HorizBord","TopDE","BottDE"].includes(
				currentBlock.blockName
			) === false
		) {console.log(`currentBlock:`,currentBlock);
			console.log(`cur x; `, currentBlock.x);
			if (currentBlock.x > 0) {
				if (
					blocks[currentBlock.x - 1].properties.c === "closed" &&
					currentBlock.properties.c === "open"
				) {
					console.log(`currentBlock: `, currentBlock);
					start = currentBlock.positions.horiz.b.x * 16;
					console.log(`start: `, start);
				} else if (
					blocks[currentBlock.x - 1].properties.c === "open" &&
					currentBlock.properties.c === "closed"
				) {
					end = currentBlock.positions.horiz.b.x * 16; //sets offsetLeft
					console.log(`end: `, end);
					let z = currentBlock.positions.horiz.b.y * 16; //sets offsetTop

					//*************look for matching y then just push x
					newRow.push({ y: z, x: [{ start: start, end: end }] });

					
				}
			}
			console.log(`newRow after set: `, newRow);
		}
		
	}

	console.log(`index:`,index, `newRow: `,newRow);
	if (newRow.length >0) {
	allRows.push(newRow);}
	
	let rowsToKeep= [];
	for (let ind = 0; ind< allRows.length; ind++) { if (ind%2 ===0) {
		rowsToKeep.push(allRows[ind]);
	}
	console.log(rowsToKeep);
	}
// *****************on a given X the start-end of each column path  **********************
/*for (let cl = 12; cl < 21; cl++){   // starting Block
	if (blocks[x].blockName !== "Empty") {
		for (let nextCol = cl+0; nextCol < 45;nextCol=nextCol+11){//********************* 
	let currentBlock = blocks[nextCol];
	if ([ "CornBord", "vertBord", "HorizBord","TopDE","BottDE"].includes(
			currentBlock.blockName
		) === false
	) {console.log(`currentBlock:`,currentBlock);
		console.log(`cur x; `, currentBlock.x);
		if (currentBlock.x > 0 ) {
			if (
				blocks[currentBlock.x - 11].properties.d === "closed" &&
				currentBlock.properties.b === "open"
			) {
				console.log(`currentBlock: `, currentBlock);
				start = currentBlock.positions.vert.f.y * 16;
				console.log(`start: `, start);
			} else if (
				blocks[currentBlock.x - 11].properties.d === "open" &&
				currentBlock.properties.c === "closed"
			) {
				end = currentBlock.positions.horiz.b.x * 16; //sets offsetLeft
				console.log(`end: `, end);
				let z = currentBlock.positions.horiz.b.y * 16; //sets offsetTop

				//*************look for matching y then just push x
				newRow.push({ y: z, x: [{ start: start, end: end }] });

				
			}
		}
		console.log(`newRow after set: `, newRow);*
	}
	
}
}
console.log(`index:`,index, `newRow: `,newRow);
if (newRow.length >0) {
allRows.push(newRow);}

let rowsToKeep= [];
for (let ind = 0; ind< allRows.length; ind++) { if (ind%2 ===0) {
	rowsToKeep.push(allRows[ind]);
}
console.log(rowsToKeep);
}*/

	 
	
	return (
		<>
		<div className="row">
			{row.map((block, index) => {
				return <Eachone block={block} index={index}/>;
			})}
		</div>
		
		
		
</>
		
	);
};
export default Row;
