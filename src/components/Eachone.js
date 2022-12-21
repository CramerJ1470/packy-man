import React from "react";
import "../index.css";

import FW from "./FW";
import LBC from "./LBC";
import BlockSV from "./BlockSV";
import BlockSH from "./BlockSH";
import Empty from "./Empty";
import RBC from "./RBC";
import RTC from "./RTC";
import TopT from "./TopT";
import BotT from "./BotT";
import LTC from "./LTC";
import LeftT from "./LeftT";
import RightT from "./RightT";
import BottDE from "./BottDE";
import TopDE from "./TopDE";
import LeftDE from "./LeftDE";
import RightDE from "./RightDE";
import HorizBord from "./HorizBord";
import VertBord from "./VertBord";
import CornBord from "./CornBord";
import StroopWafels from "./StroopWafels";
import getPillLocations from "../checkBlocks/getPillLocations"; 


let newComp;
const Eachone = ({block,index}) => {
	let comp = block.blockName;   // blockName
	console.log(`Eachone block:`,block);
	console.log(`stroop block number:`,block.x);
	if (comp === "RBC") { //takes a string
		newComp = RBC; //sets a variable to a component
	} else if (comp === "FW") {
		newComp = FW;
	} else if (comp === "LBC") {
		newComp = LBC;
	} else if (comp === "BlockSV") {
		newComp = BlockSV;
	} else if (comp === "BlockSH") {
		newComp = BlockSH;
	} else if (comp === "RTC") {
		newComp = RTC;
	} else if (comp === "Empty") {
		newComp = Empty;
	} else if (comp === "LTC") {
		newComp = LTC;
	} else if (comp === "TopT") {
		newComp = TopT;
	} else if (comp === "BotT") {
		newComp = BotT;
	} else if (comp === "LeftT") {
		newComp = LeftT;
	} else if (comp === "RightT") {  
		newComp = RightT;
	} else if (comp === "RightDE") {  
		newComp = RightDE;
	} else if (comp === "LeftDE") {  
		newComp = LeftDE;
	} else if (comp === "TopDE") {  
		newComp = TopDE;
	} else if (comp === "BottDE") {  
		newComp = BottDE;
	}  else if (comp === "HorizBord") {  
		newComp = HorizBord;
	} else if (comp === "VertBord") {  
		newComp = VertBord;
	} else if (comp === "CornBord") {  
		newComp = CornBord;
	} 
	console.log(`Eachone block: `,block);
	let code = { html: newComp }; //sets a variable to the component 
//	console.log(`code: `, code.html());
	let codeHTML = code.html(); //sets a variable to running the Component;
	
	let stroopWafels = getPillLocations(block, block.x);
	console.log(`got past stroopwafels`);
// Render the component //
	return (  
		<>
				{codeHTML}
				<StroopWafels stroopWafels={stroopWafels} />
		</>		
	)
};
export default Eachone;
// line 79 <StroopWafels stroopWafels={stroopWafels} />