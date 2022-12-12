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

import { render } from "@testing-library/react";

let newComp;
const Eachone = (item) => {
	console.log(`eachone component:`, item);
	console.log(item);
	let comp = item.item;

	if (comp === "RBC") {
		newComp = RBC;
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
		console.log(`ltc: `,newComp);
	} else if (comp === "TopT") {
		newComp = TopT;
	} else if (comp === "BotT") {
		newComp = BotT;
	} else if (comp === "LeftT") {
		newComp = LeftT;
	} else if (comp === "RightT") {
		newComp = RightT;
	}
	console.log(`newComp:`,newComp);
	let code = { html: newComp };
	console.log(`code: `, code.html());
	let codeHTML = code.html();
	console.log(newComp);

	return (
		<>
				{codeHTML}
		</>		
	)
};
export default Eachone;
