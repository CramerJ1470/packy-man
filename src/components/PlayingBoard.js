// This code written by John E. Cramer
// GAARD
// https://github.com/CramerJ1470/packy-man.git
import React from "react";
import "../index.css";
import { pickRandomBlock } from "../checkBlocks/pickRandomBlock";
import Row from "./Row";
import { useRef, useEffect, useState } from "react";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";

const PlayingBoard = () => {
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
		let yList = [];
		let z;
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
				z = currentBlock.xCenter; //sets offsetTop

				//*************look for matching y then just push x
				yList.push({ start: colStart, end: colEnd });
				//newColumn.push({ x: z, y: [{ start: colStart, end: colEnd }] });
			}

			//console.log(`newColumn: cl:`,newColumn);
		}

		if (yList.length !== 0) {
			columnsToKeep.push({ x: z, y: yList });
			yList = [];
		}
	}
	console.log(`columnsToKeep:`, JSON.stringify(columnsToKeep));
	//**********Create data that will be used by characters for moving based on the game board************/

	// *****************on a given Y the start-end of each row path  **********************
	//console.log(`rows: `, rows);
	let rowsToKeep = [];
	let allRows = [];
	for (let xx = 1; xx < rows.length - 1; xx++) {
		let row = rows[xx];
		let newRow = [];
		let end;
		let z;
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
						z = currentBlock.yCenter; //sets offsetTop
						//*************look for matching y then just push x
						newRow.push({ start: start, end: end });
					} else if (
						blocks[currentBlock.x - 1].properties.c === "closed" &&
						currentBlock.properties.c === "open"
					) {
						start = currentBlock.xCenter;
					}
				}
			}
		}
		//rowsToKeep.push(allRows);
		if (newRow.length > 0) {
			rowsToKeep.push({ y: z, x: newRow });
			newRow = [];
		}
	}
	console.log(`rowsToKeep:`, JSON.stringify(rowsToKeep));
	//for (let ind = 0; ind < allRows.length; ind++) {
	//	if (ind % 2 === 0) {

	//	}
	//}
	//****************test print out rowsToKeep***********************//
	let yCheck = 16.5;
	rowsToKeep.forEach((row) => {
		if (row.y === yCheck) {
			let ans = row.x;
			console.log(`ans: `, ans);
			ans.forEach((item) => {
				console.log(`success: yCheck:${yCheck}===${item}`);
			});
		}
	});

	//****************test print out rowsToKeep***********************//
	let xCheck = 16.5;
	columnsToKeep.forEach((col) => {
		if (col.x === xCheck) {
			let ans = col.y;
			console.log(`ans: `, ans);
			ans.forEach((item) => {
				console.log(`success: xCheck:${xCheck}===${item}`);
			});
		}
	});
	let disableUp = true;
	let disableDown = true;
	let disableLeft = true;
	let disableRight = true;
	function checkYUp(packyManX, packyManY) {
		columnsToKeep.forEach((col) => {
			packyManX = Number(packyManX);
			if (
				[4.5, 14.5, 24.5, 34.5, 44.5, 54.5, 64.5, 74.5, 84.5].includes(
					packyManX
				)
			) {
				let ans = Number(col.x) - 2;
				console.log(packyManX + "," + ans);
				if (ans === packyManX) {
					let yList = col.y;
					console.log(yList);
					if (yList !== []) {
						for (let yl = 0; yl < yList.length; yl++) {
							console.log(`yList[${yl}]:`, yList[yl]);
							if (
								yList[yl].start - 2 <= packyManY &&
								yList[yl].end - 2 >= packyManY
							) {
								if (
									packyManY <= yList[yl].end &&
									packyManY > yList[yl].start - 2
								) {
									disableUp = false;
									console.log(`moving up`);
									return;
								} else disableUp = true;
								return;
							}
						}
					}
				}
			}
		});
		return disableUp;
	}

	function checkYDown(packyManX, packyManY) {
		columnsToKeep.forEach((col) => {
			packyManX = Number(packyManX);
			if (
				[4.5, 14.5, 24.5, 34.5, 44.5, 54.5, 64.5, 74.5, 84.5].includes(
					packyManX
				)
			) {
				let ans = Number(col.x) - 2;
				console.log(packyManX + "," + ans);
				if (ans === packyManX) {
					console.log(`packyManX:`, packyManX);
					let yList = col.y;
					console.log(yList);
					if (yList !== []) {
						for (let yl = 0; yl < yList.length; yl++) {
							if (
								yList[yl].start - 2 <= packyManY &&
								yList[yl].end - 2 > packyManY
							) {
								console.log(`yList[${yl}]:`, yList[yl]);
								if (
									packyManY < yList[yl].end - 2 &&
									packyManY >= yList[yl].start - 2
								) {
									disableDown = false;
									console.log(`moving down`);
									return;
								} else {
									disableDown = true;
									return;
								}
							} else if (packyManY >= yList[yl].end - 2) {
								disableDown = true;
								console.log(`no more moving down`);
							}
						}
					}
				}
			}
		});
		return disableDown;
	}
	function checkXLeft(packyManX, packyManY) {
		rowsToKeep.forEach((row) => {
			console.log(row.y - 2);
			packyManY = Number(packyManY);
			if ([4.5, 14.5, 24.5, 34.5, 44.5, 54.5].includes(packyManY)) {
				let ans = Number(row.y - 2); //adjust for placement of stroopwafels
				if (ans === Number(packyManY)) {
					console.log(`match!!!`);
					let xList = row.x;
					console.log(`xList: `, xList);
					if (xList !== []) {
						for (let xl = 0; xl < xList.length; xl++) {
							console.log(`xList[${xl}]:`, xList[xl]);
							if (
								packyManX <= xList[xl].end - 2 &&
								packyManX > xList[xl].start - 2
							) {
								disableLeft = false;
								console.log(`moving left`);
								return;
							} else disableLeft = true;
						}
					}
				}
			} else disableLeft = true;
		});
		console.log(`disableLeft`, disableLeft);
		return disableLeft;
	}

	function checkXRight(packyManX, packyManY) {
		rowsToKeep.forEach((row) => {
			console.log(row.y - 2);
			packyManY = Number(packyManY);
			if ([4.5, 14.5, 24.5, 34.5, 44.5, 54.5].includes(packyManY)) {
				let ans = Number(row.y - 2); //adjust for placement of stroopwafels
				if (ans === Number(packyManY)) {
					console.log(`match!!!`);
					let xList = row.x;
					if (xList !== []) {
						for (let xl = 0; xl < xList.length; xl++) {
							console.log(`xList[${xl}]:`, xList[xl]);
							if (
								packyManX >= xList[xl].start - 2 &&
								packyManX < xList[xl].end - 2
							) {
								disableRight = false;
								console.log(`moving right`);
								return;
							} else disableRight = true;
						}
					}
				}
			} else disableRight = true;
		});
		console.log(disableRight);
		return disableRight;
	}

	//console.log(JSON.stringify(blocks));
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

	function handleUp() {
		document.getElementById("packy").setAttribute("class", "packy");
		let packyman = document.getElementById("packy");
		let packyManY = packyman.offsetTop / 16;
		let packyManX = packyman.offsetLeft / 16;
		console.log(`X:`, packyManX);
		console.log(`checkY `, checkYUp(packyManX, packyManY));
		let disableUp = checkYUp(packyManX, packyManY);

		if (disableUp === false) {
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
	}
	function handleDown() {
		document.getElementById("packy").setAttribute("class", "packy");
		let packyman = document.getElementById("packy");
		let packyManY = packyman.offsetTop / 16;
		let packyManX = packyman.offsetLeft / 16;
		let disableDown = checkYDown(packyManX, packyManY);
		console.log(`disdown: `, disableDown);
		if (disableDown === false) {
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
	}
	function handleLeft() {
		document.getElementById("packy").setAttribute("class", "packy");
		let packyman = document.getElementById("packy");
		let packyManY = packyman.offsetTop / 16;

		let packyManX = packyman.offsetLeft / 16;
		let disableLeft = checkXLeft(packyManX, packyManY);

		if (disableLeft === false) {
			document.getElementById("packy").classList.add("left", "open");
			document.getElementById("packy").style.left =
				(packyman.offsetLeft / 16 - 0.25).toString() + "rem";
			times++;
			console.log(`XLeft:`, packyman.offsetLeft / 16);
			console.log(`yTop: `, packyman.offsetTop / 16);
			if (times % 4 === 0) {
				document.getElementById("packy").classList.add("closed");
			} else {
				document.getElementById("packy").classList.remove("closed");
				document.getElementById("packy").classList.add("open");
			}
		}
	}
	let times = 1;
	function handleRight() {
		document.getElementById("packy").setAttribute("class", "packy");
		let packyman = document.getElementById("packy");
		let packyManY = packyman.offsetTop / 16;

		let packyManX = packyman.offsetLeft / 16;
		let disableRight = checkXRight(packyManX, packyManY);

		if (disableRight === false) {
			document.getElementById("packy").classList.add("right", "open");
			document.getElementById("packy").style.left =
				(packyman.offsetLeft / 16 + 0.25).toString() + "rem";
			times++;
			if (times % 4 === 0) {
				document
					.getElementById("packy")
					.classList.add("right", "closed");
			} else {
				document.getElementById("packy").classList.remove("closed");
				document.getElementById("packy").classList.add("open");
			}
		}
	}

	useKey("Numpad4", handleLeft);
	useKey("Numpad8", handleUp);
	useKey("Numpad6", handleRight);
	useKey("Numpad2", handleDown);

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
