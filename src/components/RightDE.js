import React from "react";
import "../index.css";
import BlockSH from "./BlockSH";
import TopDE from "./TopDE";

const RightDE = () => {
	return (
		<>
			<div id="a1" className="block">
				<div className="line line1 rder"></div>
				<div className="line line2 rder"></div>
				<div className="line line1 top2"></div>
				<div className="line line2 top2 "></div>
				<div className="line line1 top2 dropBottom"></div>
				<div className="line line1 top2 dropBottom rot180 "></div>
			</div>
		</>
	);
};

export default RightDE;
