import React from "react";
import "../index.css";
import LBC from "./LBC";
import StroopWafels from "./StroopWafels";

const RTC = () => {
	return (
		<>
			<div id="a7" className="block">
				<div className="rot180">
					<LBC />
				</div>
				<StroopWafels block={"RTC"} />
			</div>
		</>
	);
};
export default RTC;
