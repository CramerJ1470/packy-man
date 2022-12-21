import React from "react";
import "../index.css";

import Eachone from "./Eachone";

const Row = ({ row , index }) => {

	return (
		<div className="row">
			{row.map((block ) => {console.log(`rowMap block:`,block);return <Eachone block={block} index={index} />})}

		</div>
	);
};
export default Row;
