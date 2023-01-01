// This code written by John E. Cramer
// GAARD
// https://github.com/CramerJ1470/packy-man.git
import React from "react";
import "../index.css";
import { pickRandomBlock } from "../checkBlocks/pickRandomBlock";
import Row from "./Row";
import { useRef, useEffect, useState } from "react";

const PlayingBoard = () => {
	function useKey(key, cb) {
		const callbackRef = useRef(cb);

		useEffect(() => {
			callbackRef.current = cb;
		});

		useEffect(() => {
			function handle(event) {
				if (event.code === key) {
					callbackRef.current(event);
				}
			}
			document.addEventListener("keypress", handle);
			return () => document.removeEventListener("keypress", handle);
		}, [key]);
	}
	//create hooks

	let packyman = document.getElementById("packy");

	function handleUp() {
		document.getElementById("packy").setAttribute("class", "packy");
		let packyman = document.getElementById("packy");
		document.getElementById("packy").classList.add("up", "open");
		document.getElementById("packy").style.top =
			(packyman.offsetTop / 16 - 0.25).toString() + "rem";
		times++;
		if (times % 4 === 0) {
			document.getElementById("packy").classList.add("closed");
		} else {
			document.getElementById("packy").classList.remove("closed");
			document.getElementById("packy").classList.add("open");
		}
	}
	function handleDown() {
		document.getElementById("packy").setAttribute("class", "packy");
		let packyman = document.getElementById("packy");
		document.getElementById("packy").classList.add("down", "open");
		document.getElementById("packy").style.top =
			(packyman.offsetTop / 16 + 0.25).toString() + "rem";
		times++;
		if (times % 4 === 0) {
			document.getElementById("packy").classList.add("closed");
		} else {
			document.getElementById("packy").classList.remove("closed");
			document.getElementById("packy").classList.add("open");
		}
	}
	function handleLeft() {
		document.getElementById("packy").setAttribute("class", "packy");
		let packyman = document.getElementById("packy");
		document.getElementById("packy").classList.add("left", "open");
		document.getElementById("packy").style.left =
			(packyman.offsetLeft / 16 - 0.25).toString() + "rem";
		times++;
		if (times % 4 === 0) {
			document.getElementById("packy").classList.add("closed");
		} else {
			document.getElementById("packy").classList.remove("closed");
			document.getElementById("packy").classList.add("open");
		}
	}
	let times = 1;
	function handleRight() {
		document.getElementById("packy").setAttribute("class", "packy");
		let packyman = document.getElementById("packy");
		document.getElementById("packy").classList.add("right", "open");
		document.getElementById("packy").style.left =
			(packyman.offsetLeft / 16 + 0.25).toString() + "rem";
		times++;
		if (times % 4 === 0) {
			document.getElementById("packy").classList.add("right", "closed");
		} else {
			document.getElementById("packy").classList.remove("closed");
			document.getElementById("packy").classList.add("open");
		}
	}

	useKey("Numpad4", handleLeft);
	useKey("Numpad8", handleUp);
	useKey("Numpad6", handleRight);
	useKey("Numpad2", handleDown);

	let blocks = [];
	for (let x = 0; x < 77; x++) {
		let block = pickRandomBlock(x, blocks);

		blocks.push(block);
	}
	let rows = [];
	let newRow1 = [];
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
			newRow1.push(blocks[u]);
			rows.push(newRow1);
			newRow1 = [];
		} else {
			newRow1.push(blocks[u]);
		}
	}

	let newColumn = [];
	let columnsToKeep = [];
	let colStart;
	let colEnd;

	for (let cl = 12; cl < 21; cl++) {
		// starting Block
		for (let nextCol = cl; nextCol < cl + 45; nextCol = nextCol + 11) {
			//*********************
			let currentBlock = blocks[nextCol];
			//console.log(`currentBlock:`,currentBlock);
			if (
				blocks[nextCol - 11].properties.d === "closed" &&
				currentBlock.properties.d === "open"
			) {
				colStart = currentBlock.yCenter;
			} else if (
				blocks[nextCol - 11].properties.d === "open" &&
				currentBlock.properties.d === "closed"
			) {
				colEnd = currentBlock.yCenter; //sets offsetLeft
				let z = currentBlock.xCenter; //sets offsetTop

				//*************look for matching y then just push x

				newColumn.push({ x: z, y: [{ start: colStart, end: colEnd }] });
			}
			//console.log(`newColumn: cl:`,newColumn);
		}
		if (newColumn.length !== 0) {
			columnsToKeep.push(newColumn);
			newColumn = [];
		}
	}
	console.log(`columnsToKeep:`, columnsToKeep);
	//**********Create data that will be used by characters for moving based on the game board************/

	// *****************on a given Y the start-end of each row path  **********************
	//console.log(`rows: `, rows);
	let rowsToKeep = [];
	let allRows = [];
	for (let xx = 1; xx < rows.length - 1; xx++) {
		let row = rows[xx];
		let newRow = [];
		let end;

		let start;

		for (let ay = 0; ay < row.length; ay++) {
			let currentBlock = blocks[xx * 11 + ay];

			if (
				[
					"CornBord",
					"vertBord",
					"HorizBord",
					"TopDE",
					"BottDE",
					"Empty",
				].includes(currentBlock.blockName) === false
			) {
				if (currentBlock.x > 0) {
					if (
						blocks[currentBlock.x - 1].properties.c === "closed" &&
						currentBlock.properties.c === "open"
					) {
						start = currentBlock.xCenter;
					} else if (
						blocks[currentBlock.x - 1].properties.c === "open" &&
						currentBlock.properties.c === "closed"
					) {
						end = currentBlock.xCenter; //sets offsetLeft
						let z = currentBlock.yCenter; //sets offsetTop
						//*************look for matching y then just push x
						newRow.push({ y: z, x: [{ start: start, end: end }] });
					} else if (
						blocks[currentBlock.x - 1].properties.c === "closed" &&
						currentBlock.properties.c === "open"
					) {
						start = currentBlock.xCenter;
					}
				}
				if (newRow.length > 0) {
					allRows.push(newRow);
					newRow = [];
				}
			}
		}
		rowsToKeep.push(allRows);
	}
	console.log(rowsToKeep);
	//for (let ind = 0; ind < allRows.length; ind++) {
	//	if (ind % 2 === 0) {

	//	}
	//}

	//console.log(JSON.stringify(blocks));

	return (
		<>
			<div id="packy" className="packy openmouth"></div>
			{rows.map((row, index) => {
				return <Row row={row} blocks={blocks} index={index} />;
			})}
			<div
				style={{ textAlign: "left", fontWeight: "bold", color: "blue" }}
			>
				Use Numpad 4,8,6,2 (arrows) to move packyman
			</div>
		</>
	);
};

export default PlayingBoard;
