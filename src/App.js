import VideoChat from "catalyst-vc-react";
import "./App.css";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const App = () => {
	const history = useHistory();
	useEffect(() => {
		if (window.location.pathname === "/") {
			history.push(
				window.prompt(
					"Please enter your Palm Beach Women's Counseling Session Name: ",
					"Enter Session Name"
				)
			);
		}
	}, [history]);

	return (
		<VideoChat
			sessionKey={window.location.pathname.substring(1)}
			uniqueAppId="8652c9ca-1131-4f23-833d-485083fbda6f"
			themeColor="#D46AB7"
			defaults={{ audioOn: false }}
			onEndCall={() =>
				(window.location.href = "https://palmbeachwomenscounseling.com/")
			}
		/>
	);
};

export default App;
