

function getPillLocations(block, x) {
	let pillLocs = block.positions;
	console.log(pillLocs.horiz);

	let blockName = block.blockName;

	let stroopwafels = [];
	
	let horizEls = Object.entries(pillLocs.horiz);
	horizEls.forEach((location) => {let key = location[0]; console.log('key: ',key); let wafel = {}; wafel.type=key; wafel.location=location[1]; console.log(`new wafel: `,wafel); stroopwafels.push(wafel);});

	let vertEls = Object.entries(pillLocs.vert);
	vertEls.forEach((location) => {let key = location[0]; console.log('key: ',key); let wafel = {}; wafel.type=key;wafel.location = location[1]; console.log(`new wafel: `,wafel); stroopwafels.push(wafel);});

	console.log(stroopwafels);
	return stroopwafels;
}
export default getPillLocations;
