import React from "react";
import "../index.css";
import BotOpen from './BotOpen';
import StroopWafels from "./StroopWafels";

const BotT = () => {
	return (
		<>
			<div id="a1" className="block">
            <div className="line line1 fulltop"></div>
			<div className="line line2 fulltop"></div>
                <BotOpen/>
				<StroopWafels block={"BotT"}/>
			</div>
			
			
		</>
	);
};

export default BotT;