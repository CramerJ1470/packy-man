import React from "react";
import "../index.css";
import LBIC from "./LBIC";
import SBS from "./SBS";
import SLS from "./SLS";
import RTOC from "./RTOC";
import FullBottom from "./FullBottom";

const LBC = () => {
	return (
		<>
			<div id="a7" className="block">
				<SLS />
				<LBIC />
				<SBS />
				<RTOC />
			</div>
		</>
	);
};
export default LBC;
