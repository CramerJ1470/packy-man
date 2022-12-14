import React from "react";
import "../index.css";

import Eachone from "./Eachone";

const Row = ({ index, row }) => {

	return (
		<div className="row">
			{row.map((item ) => {return <Eachone block={item} />})}

		</div>
	);
};
export default Row;
