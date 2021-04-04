import VideoChat from "catalyst-vc-react";
import "./App.css";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect } from "react";
const App = () => {
	const location = useLocation();
	const history = useHistory();

	useEffect(() => {
		if (location.pathname === "/") {
			history.push(
				window.prompt(
					"Please enter your Palm Beach Women's Counseling Session Name: ",
					"Enter Session Name"
				)
			);
		}
	}, []);

	return (
		<VideoChat
			sessionKey={location.pathname.substring(1)}
			uniqueAppId="8652c9ca-1131-4f23-833d-485083fbda6f"
			themeColor="#D46AB7"
			defaults={{ audioOn: false }}
			onEndCall={() =>
				(window.location = "https://palmbeachwomenscounseling.com/")
			}
		/>
	);
};

export default App;
