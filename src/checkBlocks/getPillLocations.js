import makePillBtn from "./makePillBtn";

function getPillLocations(block, x) {
	let pillLocs = block.positions;
   console.log(`pillLocs for ${block.blockName} x=${x}: `,pillLocs);
	let blockName = block.blockName;
    //console.log(`blockName: `,blockName);
    let stroopwafels = [];
	for (let i = 0; i < pillLocs.horiz.length; i++) {

		let bx = pillLocs.horiz[i].x;
       // console.log(`horiz[${i}].x: `,bx);
		let by = pillLocs.horiz[i].y;
    //console.log(`by: `,by);
		let newWafel = makePillBtn(bx, by, blockName, x);
       //console.log(`newWafel Horiz: `,newWafel);
        stroopwafels.push(newWafel);
	}
	for (let k = 0; k < pillLocs.vert.length; k++) {
		let bx = pillLocs.vert[k].x;
	//	console.log(`x for vert #${k}:`,bx);
		let by = pillLocs.vert[k].y;
		let newWafel = makePillBtn(bx, by);
       //console.log(`newWafel: `,newWafel);
        stroopwafels.push(newWafel);
	}
    return stroopwafels;
}
export default getPillLocations;
