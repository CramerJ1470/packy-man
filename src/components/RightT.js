import React from "react";
import "../index.css";

import LeftT from "./LeftT";


const RightT = () => {
	return (
		<>
			<div id="a1" className="block ">
				
				<div className="rot180 ">
					<LeftT/>
				</div>
			</div>
		</>
	);
};

export default RightT;