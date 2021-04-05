import VideoChat from "catalyst-vc-react";
import "./App.css";
import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
const App = () => {
	const location = useLocation();
	const history = useHistory();

	useEffect(() => {
		if (location.pathname === "/") {
			var newRoom = window.prompt(
				"Please enter your Palm Beach Women's Counseling Session Name: ",
				"Enter Session Name"
			);
			history.push(newRoom);
		}
	}, [history, location.pathname]);

	return (
		<VideoChat
			sessionKey={location.pathname.substring(1)}
			uniqueAppId="8652c9ca-1131-4f23-833d-485083fbda6f"
			themeColor="#D46AB7"
			hidden={{ darkmode: true }}
			defaults={{ audioOn: false }}
			onEndCall={() =>
				(window.location.href = "https://palmbeachwomenscounseling.com/")
			}
		/>
	);
};

export default App;
