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
			<div id="packy" className="packy openmouth"></div>
			{rows.map((row, index) => {
				return <Row index={index} row={row} />;
			})}
		</>
	);
};

export default PlayingBoard;
