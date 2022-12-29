import React from "react";
import "../index.css";

const Wafel = ({ wafel }) => {
	
	let id = wafel.x+wafel.y;
	
	return (
		 
			<i style={{"top": wafel.y, "left":wafel.x}} id={{id}} className="fa-solid fa-stroopwafel"></i>
		 
	);
    
};

export default Wafel;