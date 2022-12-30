import React from "react";
import "../index.css";
import BlockSH from "./BlockSH";
import StroopWafels from "./StroopWafels";
import FullBottom from "./FullBottom";

const BlockSV = () => {
	return (
		<>
			<div id="a3" className="block">
			<div className="block rot90">
			<div className="line line1 fulltop"></div>
				<div className="line line2 fulltop"></div>
				<div className="line line1 fullbottom"></div>
			<div className="line line2 fullbottom"></div>
				</div>
				<StroopWafels block={"BlockSV"}/>
			</div>
			

		</>
	);
};

export default BlockSV;