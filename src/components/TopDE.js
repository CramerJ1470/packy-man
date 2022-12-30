import React from "react";
import "../index.css";
import RightDE from "./RightDE";
import StroopWafels from "./StroopWafels";

const TopDE = () => {
	return (
		<div id="a1" className="block rot90">
			<RightDE />

			<StroopWafels block={"TopDE"} />
		</div>
	);
};

export default TopDE;
