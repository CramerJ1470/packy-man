import React from "react";
import "../index.css";
import LBIC from "./LBIC";
import SBS from "./SBS";
import SLS from "./SLS";
import RTOC from "./RTOC";
import StroopWafels from "./StroopWafels";

const LBC = () => {
	return (
		<>
			<div id="a7" className="block">
				<SLS />
				<LBIC />
				<SBS />
				<RTOC />
				<StroopWafels block={"LBC"}/>
			</div>
			
		</>
	);
};
export default LBC;
