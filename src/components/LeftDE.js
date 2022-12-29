import React from "react";
import "../index.css";
import RightDE from "./RightDE";
import StroopWafels from "./StroopWafels";

const LeftDE = () => {
	return (
		<>
			<div className="row">
				<div id="a1" className="block rot180">
					<RightDE />
				</div>
				<StroopWafels block={"LeftDE"}/>
			</div>
			
		</>
	);
};

export default LeftDE;
