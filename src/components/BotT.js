import React from "react";
import "../index.css";
import FullTop from "./FullTop"; 
import BotOpen from './BotOpen';

const BotT = () => {
	return (
		<>
			<div id="a1" className="block">
            <div className="line line1 fulltop"></div>
			<div className="line line2 fulltop"></div>
                <BotOpen/>

			</div>
			
		</>
	);
};

export default BotT;