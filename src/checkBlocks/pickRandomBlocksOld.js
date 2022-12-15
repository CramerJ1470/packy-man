

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

					default:
						console.log(`Not block found`);
				}
				return properties;
			})();
			this.type = (block) => {
				let choice = block.toLowerCase();
				return choice;
			};
			this.y = Math.floor(Math.round(x % 8)) + x * 8;
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

	let newBlock;
   
	let matrix;
	function pickBlock(x, blocks, blocks1) {
		console.log(`x: ${x}`);
		console.log(`blocks: `, blocks);
		console.log(`blocks1:`, blocks1);
		if (x === 36) {
			newBlock = new Block("LBC", x);
			console.log(`newBlock:`, newBlock);
		} else if (x === 8) {
			newBlock = new Block("RTC", x);
			console.log(`newBlock:`, newBlock);
		} else if (x === 44) {
			newBlock = new Block("RBC", x);
			console.log(newBlock);
		} else if (x > 0 && x < 7) {
			matrix = {
				a: blocks[x - 1].properties.c,
				b: "closed",
			};
			//matrix.c: Math.round() < 0.5 ? "open" : "closed",
			//matrix.d = (function() {if (matrix.c === "open") {return "closed";} else {return "open";}})();
			console.log(`matrix length: `,Object.keys(matrix).length);
			console.log(`left side: `,blocks[x-1].properties.c);
			 
			newBlock = matrixMatch(matrix, blocks1);
			console.log(newBlock);
		} else if (x === 7) {
			matrix = {
				a: blocks[x - 1].properties.c,
				b: "closed",
				c: "open",
			};
			newBlock = matrixMatch(matrix, blocks1);
		} else if (x > 8 && x < 35) {
			if (x === 18 || x === 27) {
				matrix = {
					a: "closed",
					b: blocks[x - 9].properties.d,
			};
				newBlock = matrixMatch(matrix, blocks1);
			} else if (x === 9 || x === 18) {
				console.log(`9`,x);
				matrix = {
					
					b: blocks[x - 9].properties.d,
					a: "closed"
			};
					newBlock = matrixMatch(matrix, blocks1);
			} else if (x === 17 || x === 26) {
				matrix = {
					a: blocks[x - 1].properties.c,
					b: blocks[x - 9].properties.d,
					c: "closed",
				};
				newBlock = matrixMatch(matrix, blocks1);
			} else {
				matrix = {
						a: blocks[x-1].properties.c,
						b: "closed"
						
				};
				newBlock = matrixMatch(matrix, blocks1);
			}
		} else if (x === 35) {
			matrix = {
				a: blocks[34].properties.c,
				b: blocks[x - 9].properties.d,
				d: "open",
			};
			newBlock = matrixMatch(matrix, blocks1);
		} else if (x > 36 && x < 44) {
			if (x !== 43) {
				matrix = {
					a: blocks[x - 1].properties.c,
					b: blocks[x - 9].properties.d,
					d: "closed",
				};
				newBlock = matrixMatch(matrix, blocks1);
			} else if (x === 43) {
				matrix = {
					a: blocks[x - 1].properties.c,
					b: blocks[x - 9].properties.d,
					c: "open",
					d: "closed",
				};
				newBlock = matrixMatch(matrix, blocks1);
			}
		}
		console.log(`pickBlockEnd block:`,newBlock);
		return newBlock;
		
		
		
	}
let blocksToMatch=[];
	function matrixMatch(matrix, blocks1) {
		let blocksToMatch=[];
		let blockChosen;
		console.log(`matrixMatch blocks:`,blocks1);
		console.log(`matrix: `,matrix);
		console.log('blocks1:',blocks1);
		blocks1.forEach((block) => {
			let newComp = new Block(block); // blockName

			//let code = { html: newComp }; sets a variable to the component
			console.log(`block being checked for match: `, newComp);
			//let codeHTML = code.html();
			blocksToMatch.push(newComp);
			
			
		});
		blockChosen = check(matrix,blocksToMatch,x);
	
	 function check(matrix,blocksToMatch,x) {
		let matrixMatches = [];
			blocksToMatch.forEach((block) => {
			console.log(`block to try as match: `,block);
			console.log(`Matrix Match of ${matrix.a} to ${block.properties.c}`);
			let checkCount = Object.keys(matrix).length;
			let count = 0;
			if (matrix.a && block.properties.a === matrix.a) {
				count++;
				console.log(`matched a`);

			} 
			if (matrix.b && (x > 0 && x < 8)) {
				if(block.properties.b  === "closed") {
					count++;
					console.log(`matched b x = 1-7`);
				} else if (matrix.b && x >8 ){
					if (block.properties.b === matrix.b) {
						count++;
						console.log(`matched b`);
					}
				}
			}	
			if (matrix.c && (x === 7 || x === 43)) {
				if(block.properties.c  === "open") {
					count++;
					console.log(`matched b x = 7`);
				}
			}
			if(matrix.c && block.properties.c === matrix.c) {
				count++;
				console.log(`matched c`);
			} if(matrix.d && block.properties.d === matrix.d) {
				count++;
				console.log('matched d');
			} if (count === checkCount) {
				console.log(`Matched block!!! Wahoo!! block:`,block);
				console.log(`block Chosen: `,block);
				matrixMatches.push(block);
				console.log(`mixedMatches: `,matrixMatches);
				count = 0;
			} else {
				count = 0;
			}  

		});
	
		let pickedNum = Math.floor(Math.random() * matrixMatches.length);
		console.log(`matrixMatches[pickedNum]:`,matrixMatches[pickedNum]);

		return matrixMatches[pickedNum];
	}
		console.log(blockChosen,`:`,blocks[x-1]);	
		if (x > 0 && blockChosen === blocks[x-1]) {check(matrix,blocksToMatch);}
		return blockChosen;
	}
	

	if (x === 0) {
		newBlock = new Block("LTC", x);
		console.log(`newBlock:`, newBlock);
		return newBlock;
	} else {
		newBlock = pickBlock(x, blocks, blocks1);
		return newBlock;
	}
	
};

export default pickRandomBlock;
