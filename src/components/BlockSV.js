import React from "react";
import "../index.css";
import BlockSH from "./BlockSH";
import StroopWafels from "./StroopWafels";

const BlockSV = () => {
	return (
		<>
			<div id="a3" className="block rot90">
				<BlockSH />
				<StroopWafels block={"BlockSV"}/>
			</div>
			

		</>
	);
};

export default BlockSV;