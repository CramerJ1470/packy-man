import "./App.css";
import "./index.css";
import Straightwall from "./components/Straightwalls";
import LTOC from "./components/LTOC";
import LBOC from "./components/LBOC";
import RTOC from "./components/RTOC";
import RBOC from "./components/RBOC";
import BlockSH from "./components/BlockSH";
import BlockSV from "./components/BlockSV";
import FW from "./components/FW";
import LBC from "./components/LBC";
import LS from "./components/LS";
import SHB from "./components/SHB";
import SBS from "./components/SBS";
import LTC from "./components/LTC";
import RTC from "./components/RTC";
import RBC from "./components/RBC";
import FullTop from "./components/FullTop";
import Empty from "./components/Empty";
import { createElement } from "react";
import PlayingBoard from "./components/PlayingBoard";

function App() {
	return (
		<>
			<div className="App">
				<PlayingBoard/>
			</div>
		</>
		
		
	);
}

export default App;
