import React from "react";
import "../index.css";

const Wafel = ({ wafel }) => {
	let id = `${wafel.type}${wafel.location.x}${wafel.location.y}`;
	console.log(id,wafel.location.x,wafel.location.y);
	return (
		 
			<i style={{"top": `${wafel.location.y}rem`, "left":`${wafel.location.x}rem`}} id={{id}} className="fa-solid fa-stroopwafel"></i>
		 
	);
    
};

export default Wafel;