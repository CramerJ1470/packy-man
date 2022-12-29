import React from "react";
import "../index.css";
import RTOC from "./RTOC";
import RBOC2 from "./RBOC2";
import StroopWafels from "./StroopWafels";

const LeftT = () => {
	return (
		<>
			<div id="a1" className="block ">
				<RTOC />
				<RBOC2 />
				<div className="rot270 ">
					<div className="line line1 leftvert"></div>
					<div className="line line2 leftvert"></div>
				</div>
				<StroopWafels block={"LeftT"}/>
			</div>
		</>

	);
};

export default LeftT;
