// This code written by John E. Cramer
// GAARD
// https://github.com/CramerJ1470/packy-man.git
import React from "react";
import "../index.css";
import pickRandomBlock from "../checkBlocks/pickRandomBlock";
import Row from "./Row";
import { useRef, useEffect } from "react";

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

	function handleUp() {
		let packyman = document.getElementById("packy").offsetTop;
		document.getElementById("packy").style.top =
			(packyman / 16 - 0.3).toString() + "rem";
	}
	function handleDown() {
		let packyman = document.getElementById("packy").offsetTop;
		document.getElementById("packy").style.top =
			(packyman / 16 + 0.3).toString() + "rem";
	}
	function handleLeft() {
		let packyman = document.getElementById("packy").offsetLeft;
		document.getElementById("packy").style.left =
			(packyman / 16 - 0.3).toString() + "rem";
	}
	function handleRight() {
		let packyman = document.getElementById("packy").offsetLeft;
		document.getElementById("packy").style.left =
			(packyman / 16 + 0.3).toString() + "rem";
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
			<div id="packy" className="packy openmouth">
				here
			</div>
			{rows.map((row, index) => {
				return <Row index={index} row={row} />;
			})}
		</>
	);
};

export default PlayingBoard;
