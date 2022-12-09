import React from "react";
import "../index.css";

import Eachone from "./Eachone";

const Row = (row) => {
	console.log(`new row: `, row);
	let newRow = row.row;
	return (
		<>
		<div id="row" className="row">
			{newRow.map((x) => {
				console.log(`eachOne: `,x)
				return <Eachone component={x} />;
			})}
		</div>
		</>
	);
};
export default Row;
