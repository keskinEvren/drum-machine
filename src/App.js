import { useState } from "react";
import Drum from "./components/Drum";
function App() {
	const [sounds, setSounds] = useState([
		{
			name: "boom",
			sound: require("./sounds/boom.mp3").default,
			key: "A",
		},
		{
			name: "clap",
			sound: require("./sounds/clap.mp3").default,
			key: "S",
		},
		{
			name: "hihat",
			sound: require("./sounds/hihat.mp3").default,
			key: "D",
		},
		{
			name: "kick",
			sound: require("./sounds/kick.mp3").default,
			key: "F",
		},
		{
			name: "openhat",
			sound: require("./sounds/openhat.mp3").default,
			key: "G",
		},
		{
			name: "ride",
			sound: require("./sounds/ride.mp3").default,
			key: "H",
		},
		{
			name: "snare",
			sound: require("./sounds/snare.mp3").default,
			key: "J",
		},
		{
			name: "tink",
			sound: require("./sounds/tink.mp3").default,
			key: "K",
		},
		{
			name: "tom",
			sound: require("./sounds/tom.mp3").default,
			key: "L",
		},
	]);

	return (
		<div className="App">
			<h1>React Drumkit</h1>
			<div className="drums">
				{sounds.map((sound, i) => (
					<Drum key={i} letter={sound.key} sound={sound.sound} />
				))}
			</div>
		</div>
	);
}

export default App;
