import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter basename="/">
			<Switch>
				<Route path="/:id" exact component={App} />
				{/* <Redirect path="/" to="/waiting_room" /> */}
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
