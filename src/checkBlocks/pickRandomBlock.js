const pickRandomBlock = (x, blocks) => {
	//console.log(`y: `, y, ` x:`, x);

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
					case "empty1":
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
							a: "closed",
							b: "open",
							c: "open",
							d: "open",
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
			this.y = Math.floor(Math.round(x % 8));
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
		"Empty1",
		"RBC",
		"RTC",
		"TopT",
		"LeftT",
		"RightT",
	];
	let newBlock = {};
	if (x === 0) {
		newBlock = new Block("LTC", x);
		console.log(`newBlock:`, newBlock);
		return newBlock;
	} else if ( x=== 44) {
		newBlock = new Block("RBC", x);
		console.log(`newBlock:`, newBlock);
		return newBlock;
	} else if ( x=== 36) {
		newBlock = new Block("LBC", x);
		console.log(`newBlock:`, newBlock);
		return newBlock;
	} else if ( x=== 8) {
		newBlock = new Block("RTC", x);
		console.log(`newBlock:`, newBlock);
		return newBlock;
	}

	
	let newBlockNum = Math.floor(Math.random() * 11);
	console.log(`newBlockNum: `, newBlockNum);
	newBlock = new Block(blocks1[newBlockNum], x);

	console.log(`newBlock:`, newBlock);

	function getTopBlock(x) {
		if (x < 9) {
			let topBlock =new Block('Empty1');
			console.log(`topBlock for ${x}:`, topBlock);
			return topBlock;
		} else if (x >= 9) {
			let topBlock = blocks[x - 9];
			console.log(`topBlock for ${x}: `, topBlock);
			return topBlock;
		}
	}
	let leftBlock = {};
	function getLeftBlock(x) {
		if (x === 0 || x===9 || x===18 || x=== 27 || x === 36) {
			leftBlock = new Block("Empty1");
			console.log(`leftBlock for ${x}: `, leftBlock);
			return leftBlock;
		} else {
			leftBlock = blocks[x - 1];
			console.log(`leftBlock for ${x}: `, leftBlock);
			return leftBlock;
		}
	}

	function getRightBlock(x) {
		if (x === 7) {
			let rightBlock = new Block("RTC");
			console.log(`rightBlock for ${x}: `, rightBlock);
			return rightBlock;
		} else if (x === 8 || x === 17 || x === 26 || x ===35) {
			let rightBlock = new Block("Empty1");
			console.log(`rightBlock for ${x}: `, rightBlock);
			return rightBlock;
		} else if (x === 44) {
			let rightBlock = new Block("RBC");
			console.log(`rightBlock for ${x}: `, rightBlock);
			return rightBlock;
		} else { 
			let rightBlock = { properties: { a: "" } };
			rightBlock.properties.a = newBlock.properties.c;
			console.log(`rightBlock for ${x}: `, rightBlock);
			return rightBlock;
		}
	}

	function getBottomBlock(x) {
		if (x >= 36 && x < 44) {
			let bottomBlock = new Block("Empty1");
			console.log(`bottomBlock for ${x}: `, bottomBlock);
			return bottomBlock;
		} else if (x === 27) {
			let bottomBlock = new Block("LBC");
			console.log(`bottomBlock for ${x}: `, bottomBlock);
			return bottomBlock;
		} else  if (x < 36) { 
			let bottomBlock = { properties: { b: "" } };
			bottomBlock.properties.b = (Math.random() < 0.5) ? 'open' : 'closed';
			console.log(bottomBlock.properties.b);
			return bottomBlock;
		}

		}
	

	if (x !== 0) {
		checkBlock(newBlock);
	}

	function checkBlock(newBlock) {
		console.log(`newBlockCB: `, newBlock);
		let i = x;

		let topBlock = getTopBlock(i);

		let leftBlock = getLeftBlock(i);

		let rightBlock = getRightBlock(i);
		
		let bottomBlock = getBottomBlock(i);
		

		if (topBlock.properties.d === newBlock.properties.b) {
			console.log(`Top matches!`);
			if (leftBlock.properties.c === newBlock.properties.a) {
				console.log(`left matches!`);
				if (x !==7 && x %8 ===0 && x !==44)  {
					console.log(`Right Matches! Bingo!`);
					if (bottomBlock.properties.b === newBlock.properties.d) {
						console.log(`Bottom Matches! Bingo!`);
					} else {
						console.log(`Bottom no match...`);
						pickRandomBlock(x, blocks);
					} 
				} else if ( x === 7 && x%8 !== 0 && x === 44 && rightBlock.properties.a === 			
						newBlock.properties.c) {
						console.log(`Right matches!`);
						if (bottomBlock.properties.b === newBlock.properties.d) {
							console.log(`final Block: `,newBlock);
							console.log(`Bottom Matches! Bingo!`);
						} else {
							console.log(`Bottom no match...`);
							pickRandomBlock(x, blocks);
						} 
				} else if (rightBlock.properties.a === newBlock.properties.c){	
					console.log(`Right matches!`);
					if (bottomBlock.properties.b === newBlock.properties.d) {
						console.log(`Bottom Matches! Bingo!`);
					} else {
						console.log(`Bottom no match...`);
						pickRandomBlock(x, blocks);
					} 
				} else {
					console.log(`Right no match...`);
					pickRandomBlock(x, blocks);
				}
			} else {
				console.log(`Left no match...`);
				pickRandomBlock(x, blocks);
			}
		} else {
			console.log(`Top no match...`);
			pickRandomBlock(x, blocks);
		}

		/*	for (let t = 0; t < searchForBlock.length; t++) {
			if (Block(searchForBlock[t].properties === matrix)) {
				pickArray.push(Block(searchForBlock[t].name));
				console.log(`PickArray: `, pickArray);
			}
		}

		let finalPickNum = Math.floor(Math.random() * pickArray.length);
		let finalPick = pickArray[finalPickNum];
		blocks.push(finalPick);
		console.log(finalPick);
	}

	console.log(blocks);
	*/
	}
	return newBlock;
};

export default pickRandomBlock;
