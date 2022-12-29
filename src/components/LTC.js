import React from "react";
import "../index.css";
import LBC from "./LBC";
import StroopWafels from "./StroopWafels";

const LTC = () => {
	return (
		<>
			<div id="a7" className="block">
				<div className="rot90">
				<LBC />
				</div>
				<StroopWafels block={"LTC"} />
			</div>
			
		</>
	);
};
export default LTC;
