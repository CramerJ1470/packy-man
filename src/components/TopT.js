import React from "react";
import "../index.css";
import TopOpen from "./TopOpen";
import FullBottom from "./FullBottom";
import StroopWafels from "./StroopWafels"; 

const TopT = () => {
	return (
		<div id="a1" className="block">
				<FullBottom/>
                <TopOpen />
				<StroopWafels block={"TopT"}/>
			</div>
	);
};

export default TopT;