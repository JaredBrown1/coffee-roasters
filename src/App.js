import "./App.css";

import { Route } from "react-router-dom";

import HomePage from "./components/home-page/homePage";
import AboutPage from "./components/about-page/aboutPage";
import CreatePlan from "./components/create-plan/createPlan";
import NavBar from "./components/nav-bar/navBar";
import Footer from "./components/footer/footer";
function App() {
	return (
		<div className="App">
			<NavBar />
			<Route exact path="/" component={HomePage} />
			<Route path="/about" component={AboutPage} />
			<Route path="/create" component={CreatePlan} />
			<Footer />
		</div>
	);
}

export default App;
