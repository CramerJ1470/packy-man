import React from "react";
import "../index.css";
import Wafel from "./Wafel";

const StroopWafels = ( {stroopWafels}) => {
	console.log(`stroop wafels:`,stroopWafels);

	 return (
		<>
		
			{stroopWafels.map((wafel) => {console.log(wafel); return <Wafel wafel={wafel}/>})}
		
		</>
	); 
};

export default StroopWafels;
