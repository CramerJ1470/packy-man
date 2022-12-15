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
							b: "open",
							c: "open",
							d: "closed",
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
							b: "closed",
							c: "open",
							d: "open",
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
			this.type = (block) => {
				let choice = block.toLowerCase();
				return choice;
			};
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
	let newBlock;

 
	function pickBlock(x, blocks, blocks1) {
		console.log(`x: ${x}`);
		console.log(`blocks: `, blocks);
		console.log(`blocks1:`, blocks1);
		let matrix;
		
		if (x === 0 || x === 10 || x === 66 || x === 76) {
			newBlock = new Block("CornBord", x);
			console.log(`newBlock:`, newBlock);
		} else if (x > 0 && x  < 10) {
			newBlock = new Block("HorizBord", x);
			console.log(`newBlock:`, newBlock);
		} else if (x%11 === 0 && x !== 0 && x !== 66) {
			newBlock = new Block("VertBord", x);
			console.log(`newBlock:`, newBlock);
		} else if ((x+1)%11===0) {

			newBlock = new Block("VertBord", x);
			console.log(`newBlock:`, newBlock);
		} else if (x > 10 && x < 54) {
			
			matrix = {
				a: blocks[x - 1].properties.c,
				b: blocks[x - 11].properties.d,
			};
			newBlock = matrixMatch(matrix, blocks1);
		}else if (x > 55 && x < 65) {
			let matrix = {
				a: blocks[x - 1].properties.c,
				b: blocks[x - 11].properties.d,
				d: "closed"
			};
			newBlock = matrixMatch(matrix, blocks1);
		} else if (x > 66 && x < 76) {
			newBlock = new Block("HorizBord", x);
			console.log(`newBlock:`, newBlock);
		} 
		console.log(`pickBlockEnd block:`, newBlock);
		return newBlock;
	}
	let blocksToMatch = [];
	function matrixMatch(matrix, blocks1) {
		let blocksToMatch = [];
		let blockChosen;
		console.log(`matrixMatch blocks:`, blocks1);
		console.log(`matrix: `, matrix);
		console.log("blocks1:", blocks1);
		blocks1.forEach((block) => {
			let newComp = new Block(block); // blockName

			//let code = { html: newComp }; sets a variable to the component
			console.log(`block being checked for match: `, newComp);
			//let codeHTML = code.html();
			blocksToMatch.push(newComp);
		});
		blockChosen = check(matrix, blocksToMatch, x);

		function check(matrix, blocksToMatch, x) {
			let matrixMatches = [];
			blocksToMatch.forEach((block) => {
				console.log(`block to try as match: `, block);
				console.log(
					`Matrix Match of ${matrix.a} to ${block.properties.c}`
				);
				let checkCount = Object.keys(matrix).length;
				let count = 0;
				if (matrix.a && block.properties.a === matrix.a) {
					count++;
					console.log(`matched a`);
				}
				if (matrix.b && block.properties.b === matrix.b) {
					count++;
					console.log(`matched b`);
					}
				if (matrix.c && block.properties.c === matrix.c) {
					count++;
					console.log(`matched c`);
				}
				if (matrix.d && block.properties.d === matrix.d) {
					count++;
					console.log("matched d");
				}
				if (count === checkCount) {
					console.log(`Matched block!!! Wahoo!! block:`, block);
					console.log(`block Chosen: `, block);
					matrixMatches.push(block);
					console.log(`mixedMatches: `, matrixMatches);
					count = 0;
				} else {
					count = 0;
				}
			});

			let pickedNum = Math.floor(Math.random() * matrixMatches.length);
			console.log(`matrixMatches[pickedNum]:`, matrixMatches[pickedNum]);

			return matrixMatches[pickedNum];
		}
		console.log(blockChosen, `:`, blocks[x - 1]);
		if (x > 0 && blockChosen === blocks[x - 1]) {
			check(matrix, blocksToMatch);
		}
		return blockChosen;
	}
	pickBlock(x, blocks, blocks1);
	return newBlock;
	
};

export default pickRandomBlock;
