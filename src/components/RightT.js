import React from "react";
import "../index.css";
import LeftT from "./LeftT";
import StroopWafels from "./StroopWafels";


const RightT = () => {
	return (
		<>
			<div id="a1" className="block ">
				
				<div className="rot180 ">
					<LeftT/>
					
				</div>
				<StroopWafels block={"RightT"}/>
			</div>
		</>
	);
};

export default RightT;