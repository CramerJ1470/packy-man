const pickRandomBlock = (x, blocks) => {
	console.log(`starting pickrand x:`, x);
	console.log(`starting pickrand blocks: `, blocks);

	class Block {
		constructor(block, x) {
			this.blockName = block;
			this.properties = (() => {
				let type = block.toLowerCase();
				let properties;
				switch (type) {
					case "bott":
						properties = {
							a: "open",
							b: "closed",
							c: "open",
							d: "open",
						};
						break;
					case "ltc":
						properties = {
							a: "closed",
							b: "closed",
							c: "open",
							d: "open",
						};
						break;
					case "fw":
						properties = {
							a: "open",
							b: "open",
							c: "open",
							d: "open",
						};
						break;
					case "lbc":
						properties = {
							a: "closed",
							b: "open",
							c: "open",
							d: "closed",
						};
						break;
					case "blocksv":
						properties = {
							a: "closed",
							b: "open",
							c: "closed",
							d: "open",
						};
						break;
					case "blocksh":
						properties = {
							a: "open",
							b: "closed",
							c: "open",
							d: "closed",
						};
						break;
					case "empty":
						properties = {
							a: "closed",
							b: "closed",
							c: "closed",
							d: "closed",
						};
						break;
					case "rbc":
						properties = {
							a: "open",
							b: "open",
							c: "closed",
							d: "closed",
						};
						break;
					case "rtc":
						properties = {
							a: "open",
							b: "closed",
							c: "closed",
							d: "open",
						};
						break;
					case "topt":
						properties = {
							a: "open",
							b: "open",
							c: "open",
							d: "closed",
						};
						break;
					case "leftt":
						properties = {
							a: "closed",
							b: "open",
							c: "open",
							d: "open",
						};
						break;
					case "rightt":
						properties = {
							a: "open",
							b: "open",
							c: "closed",
							d: "open",
						};
						break;
					case "topde":
						properties = {
							a: "closed",
							b: "open",
							c: "closed",
							d: "closed",
						};
						break;
					case "rightde":
						properties = {
							a: "closed",
							b: "closed",
							c: "open",
							d: "closed",
						};
						break;
					case "bottde":
						properties = {
							a: "closed",
							b: "closed",
							c: "closed",
							d: "open",
						};
						break;
					case "leftde":
						properties = {
							a: "open",
							b: "closed",
							c: "closed",
							d: "closed",
						};
						break;
					case "horizbord":
						properties = {
							a: "closed",
							b: "closed",
							c: "closed",
							d: "closed",
						};
						break;
					case "vertbord":
						properties = {
							a: "closed",
							b: "closed",
							c: "closed",
							d: "closed",
						};
						break;
					case "cornbord":
						properties = {
							a: "closed",
							b: "closed",
							c: "closed",
							d: "closed",
						};
						break;
					default:
						console.log(`Not block found`);
				}
				return properties;
			})();
			this.type = this.blockName.toLowerCase();
			this.y = Math.floor(Math.round() * (x % 11));
			this.x = x;
		}
	}

	const blocks1 = [
		"BotT",
		"LTC",
		"FW",
		"LBC",
		"BlockSV",
		"BlockSH",
		"RBC",
		"RTC",
		"TopT",
		"LeftT",
		"RightT",
		"Empty",
	];
	//	"TopDE",
	// "BottDE",
	// "RightDE",
	// "LeftDE",
	// "horizBord",
	// "vertBord",
	// "cornBord"

	// This code written by John E. Cramer
	// GAARD
	// https://github.com/CramerJ1470/packy-man.git
	let newBlock;

	function pickBlock(x, blocks, blocks1) {
			console.log(`x: ${x}`);
			console.log(`blocks: `, blocks);
			console.log(`blocks1:`, blocks1);
		let matrix;

		if (x === 0 || x === 10 || x === 66 || x === 76) {
			newBlock = new Block("CornBord", x);
			//		console.log(`newBlock:`, newBlock);
		} else if (x > 0 && x < 10) {
			newBlock = new Block("HorizBord", x);
			//		console.log(`newBlock:`, newBlock);
		} else if (x % 11 === 0 && x !== 0 && x !== 66) {
			newBlock = new Block("VertBord", x);
			//		console.log(`newBlock:`, newBlock);
		} else if ((x + 1) % 11 === 0) {
			newBlock = new Block("VertBord", x);
			//		console.log(`newBlock:`, newBlock);
		} else if (x > 10 && x < 54) {
			if (x === 20 && blocks[x - 1].properties.c === "open") {
				matrix = {
					a: "open",
					b: "closed",
					c: "closed",
					d: "open",
				};
				newBlock = matrixMatch(matrix, blocks1, x);
			} else if (x === 20 && blocks[x - 1].properties.c === "closed") {
				newBlock = new Block("BottDE", x);
			} else if (
				(x + 2) % 11 === 0 &&
				blocks[x - 1].properties.c === "open" &&
				blocks[x - 11].properties.d === "closed"
			) {
				matrix = {
					a: "open",
					b: "closed",
					c: "closed",
					d: "open",
				};
				newBlock = matrixMatch(matrix, blocks1, x);
			} else if (
				(x + 2) % 11 === 0 &&
				blocks[x - 1].properties.c === "closed" &&
				blocks[x - 11].properties.d === "open"
			) {
				matrix = {
					a: "closed",
					b: "open",
					c: "closed",
					d: "open",
				};
				newBlock = matrixMatch(matrix, blocks1, x);
			} else if (
				(x + 2) % 11 === 0 &&
				blocks[x - 1].properties.c === "closed" &&
				blocks[x - 11].properties.d === "closed"
			) {
				newBlock = new Block("Empty", x);
			} else if (
				(x + 2) % 11 === 0 &&
				blocks[x - 1].properties.c === "open" &&
				blocks[x - 11].properties.d === "open"
			) {
				matrix = {
					a: "open",
					b: "open",
					c: "closed",
				};
				newBlock = matrixMatch(matrix, blocks1, x);
			} else {
				matrix = {
					a: blocks[x - 1].properties.c,
					b: blocks[x - 11].properties.d,
					//c: Math.random() < 0.5 ? "open" : "closed",
					d: Math.random() < 0.5 ? "open" : "closed",
				};
				newBlock = matrixMatch(matrix, blocks1, x);
			}
		}
		if (
			x === 64 &&
			blocks[x - 1].properties.c === "open" &&
			blocks[x - 11].properties.d === "closed"
		) {
			newBlock = new Block("RightDE", x);
		} else if (
			x === 64 &&
			blocks[x - 1].properties.c === "closed" &&
			blocks[x - 11].properties.d === "open"
		) {
			newBlock = new Block("TopDE", x);
		} else if (
			x === 64 &&
			blocks[x - 1].properties.c === "closed" &&
			blocks[x - 11].properties.d === "closed"
		) {
			newBlock = new Block("Empty", x);
		} else if (
			x === 64 &&
			blocks[x - 1].properties.c === "open" &&
			blocks[x - 11].properties.d === "open"
		) {
			newBlock = new Block("RBC", x);
		} else if (x > 55 && x < 64) {
			let matrix = {
				a: blocks[x - 1].properties.c,
				b: blocks[x - 11].properties.d,
				d: "closed",
			};
			newBlock = matrixMatch(matrix, blocks1);
		} else if (x > 66 && x < 76) {
			newBlock = new Block("HorizBord", x);
			//		console.log(`newBlock:`, newBlock);
		}
		//		console.log(`pickBlockEnd block:`, newBlock);
		return newBlock;
	}

	function matrixMatch(matrix, blocks1, x) {
		let blocksToMatch = [];
		let blockChosen;
		//	console.log(`matrixMatch blocks:`, blocks1);
		//	console.log(`matrix: `, matrix);
		//	console.log("blocks1:", blocks1);
		blocks1.forEach((block) => {
			let newComp = new Block(block, x); // blockName

			//let code = { html: newComp }; sets a variable to the component
			//		console.log(`block being checked for match: `, newComp);
			//let codeHTML = code.html();
			blocksToMatch.push(newComp);
		});
		blockChosen = check(matrix, blocksToMatch, x);


		//	console.log(blockChosen, `:`, blocks[x - 1]);
		if (x > 0 && blockChosen === blocks[x - 1]) {
			check(matrix, blocksToMatch);
		}
		return blockChosen;
	}
	function check(matrix, blocksToMatch, x) {
		let matrixMatches = [];
		blocksToMatch.forEach((block) => {
			//			console.log(`block to try as match: `, block);
			//			console.log(
			//				`Matrix Match of ${matrix.a} to ${block.properties.c}`
			//			);
			let checkCount = Object.keys(matrix).length;
			let count = 0;
			if (matrix.a && block.properties.a === matrix.a) {
				count++;
				//				console.log(`matched a`);
			}
			if (matrix.b && block.properties.b === matrix.b) {
				count++;
				//				console.log(`matched b`);
			}
			if (matrix.c && block.properties.c === matrix.c) {
				count++;
				//				console.log(`matched c`);
			}

			if (matrix.d && block.properties.d === matrix.d) {
				count++;
				//				console.log("matched d");
			}
			if (count === checkCount) {
				//				console.log(`Matched block!!! Wahoo!! block:`, block);
				//				console.log(`block Chosen: `, block);
				matrixMatches.push(block);
				//				console.log(`mixedMatches: `, matrixMatches);
				count = 0;
			} else {
				count = 0;
			}
		});

		let pickedNum = Math.floor(Math.random() * matrixMatches.length);
		//		console.log(`matrixMatches[pickedNum]:`, matrixMatches[pickedNum]);

		return matrixMatches[pickedNum];
	}
	function createStroopWafels(block, x) {
		console.log(`createStroop block:`,block);
		let name1 = block.blockName;
		console.log(block.blockName);
		let type = name1.toLowerCase();
		console.log(type);
		let positions;
		let j = -3
		;
		const a = {
			x: j + (x % 11) * 10 - 2.5,
			y: Math.floor(x / 12) * 10,
		}; //%12 %11
		const b = {
			x: j + (x % 11) * 10,
			y: j + Math.floor(x / 11) * 10,
		};
		const c = {
			x: j + (x % 11) * 10 + 2.5,
			y: j + Math.floor(x / 12) * 10,
		};
		const d = {
			x: j + (x % 11) * 10 + 5.0,
			y: j + Math.floor(x / 11) * 10,
		};
		const e = {
			x: j + Math.floor(x / 11) * 10,
			y: j + Math.floor(x / 11) * 10 - 2.5,
		};
		const f = {
			x: j + (x % 11) * 10,
			y: j + Math.floor(x / 11) * 10,
		};
		const g = {
			x: j + Math.floor(x / 11) * 10,
			y: j + Math.floor(x / 11) * 10 + 2.5,
		};
		const h = {
			x: j + (x % 11) * 10,
			y: j + Math.floor(x / 11) * 10 + 5,
		};
		switch (type) {
			case "bott":
				positions = {
					horiz: [b, d],
					vert: [f, h]
				};
				break;
			case "ltc":
				positions = {
					horiz: [b, d],
					vert: [f, h]
				};
				break;
			case "fw":
				positions = {
					horiz: [b, d],
					vert: [f, h]
				};
				break;
			case "lbc":
				positions = {
					horiz: [b, d],
					vert: [f]
				};
				break;
			case "blocksv":
				positions = {
					horiz: [],
					vert: [f, h],
				};
				break;
			case "blocksh":
				positions = {
					horiz: [b, d],
					vert: [],
				};
				break;
			case "empty":
				positions = {
					horiz: [],
					vert: [],
				};
				break;
			case "rbc":
				positions = {
					horiz: [b],
					vert: [f],
				};
				break;
			case "rtc":
				positions = {
					horiz: [b],
					vert: [f, h],
				};
				break;
			case "topt":
				positions = {
					horiz: [b, d],
					vert: [f],
				};
				break;
			case "leftt":
				positions = {
					horiz: [b,d],
					vert: [f, h],
				};
				break;
			case "rightt":
				positions = {
					horiz: [b],
					vert: [f, h],
				};
				break;
			case "topde":
				positions = {
					horiz: [b],
					vert: [f],
				};
				break;
			case "rightde":
				positions = {
					horiz: [b],
					vert: [f],
				};
				break;
			case "bottde":
				positions = {
					horiz: [b],
					vert: [f,h],
				};
				break;
			case "leftde":
				positions = {
					horiz: [b, d],
					vert: [f],
				};
				break;
			case "horizbord":
				positions = {
					horiz: [],
					vert: [],
				};
				break;
			case "vertbord":
				positions = {
					horiz: [],
					vert: [],
				};
				break;
			case "cornbord":
				positions = {
					horiz: [],
					vert: [],
				};
				break;
			default:
				console.log(`Not block found`);
		}
		console.log(`Positions: `, positions);
		return positions;
	}
	
	newBlock = pickBlock(x, blocks, blocks1);
	newBlock.positions = createStroopWafels(newBlock, x);
	console.log(newBlock.positions);
	return newBlock;
};

export default pickRandomBlock;
