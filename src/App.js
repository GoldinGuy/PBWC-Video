import VideoChat from "catalyst-vc-react";
import "./App.css";
import { useLocation } from "react-router-dom";
const App = () => {
	const location = useLocation();

	return (
		<VideoChat
			sessionKey={location.pathname.substring(1)}
			uniqueAppId="8652c9ca-1131-4f23-833d-485083fbda6f"
			themeColor="#D46AB7"
			defaults={{ audioOn: false }}
		/>
	);
};

export default App;
