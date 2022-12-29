import React from "react";
import "../index.css";
import LBC from './LBC';
import StroopWafels from "./StroopWafels";

const RBC = () => {
	return (
		<>
			<div id="a7" className="block rot270">
                <LBC/>
				<StroopWafels block={"RBC"}/>
                </div>

			
		</>
	);
};
export default RBC;