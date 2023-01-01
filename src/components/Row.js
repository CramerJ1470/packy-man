import React, { useState } from "react";
import "../index.css";

import Eachone from "./Eachone";
//import updateAllRows from "./PlayingBoard";


const Row = ({ row, blocks, index }) => {
	
	// *****************on a given X the start-end of each column path  **********************




	return (
		<>
			<div className="row">
				{row.map((block, index) => {
					return (
						<Eachone
							block={block}
							index={index}
					
						/>
					);
				})}
			</div>
		</>
	);
};
export default Row;
