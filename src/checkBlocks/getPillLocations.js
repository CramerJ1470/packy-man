import makePillBtn from "./makePillBtn";

function getPillLocations(block, x) {
	let pillLocs = block.positions;
  
	let blockName = block.blockName;
   
    let stroopwafels = [];
	for (let i = 0; i < pillLocs.horiz.length; i++) {

		let bx = pillLocs.horiz[i].x;
     
		let by = pillLocs.horiz[i].y;
   
		let newWafel = makePillBtn(bx, by, blockName, x);
     
        stroopwafels.push(newWafel);
	}
	for (let k = 0; k < pillLocs.vert.length; k++) {
		let bx = pillLocs.vert[k].x;
	
		let by = pillLocs.vert[k].y;
		let newWafel = makePillBtn(bx, by);
       
        stroopwafels.push(newWafel);
	}
    return stroopwafels;
}
export default getPillLocations;
