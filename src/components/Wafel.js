import React from "react";
import "../index.css";

const Wafel = ({ wafel }) => {
	console.log(`wafel-Wafel:`,wafel);

	return (
		 
			<i style={{"top": `${wafel.top}`, "left":`${wafel.left}`}}  className="fa-solid fa-stroopwafel"></i>
		 
	);
    
};

export default Wafel;