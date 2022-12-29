import React from "react";
import "../index.css";
import FullBottom from "./FullBottom";
import StroopWafels from "./StroopWafels";



const BlockSH = () => {
	return (
		<>
			<div id="a1" className="block">
				<div className="line line1 fulltop"></div>
				<div className="line line2 fulltop"></div>
				<FullBottom />
				<StroopWafels block={"BlockSH"}/>
			</div>
		</>
	);
};

export default BlockSH;
