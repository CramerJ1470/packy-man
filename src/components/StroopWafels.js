import React from "react";
import "../index.css";
import Wafel from "./Wafel";

const StroopWafels = ( {stroopWafels}) => {


	 return (
		<>
		
			{stroopWafels.map((wafel) => { return <Wafel wafel={wafel}/>})}
		
		</>
	); 
};

export default StroopWafels;
