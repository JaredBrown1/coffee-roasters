import "./App.css";

import HomePage from "./components/home-page/homePage";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
function App() {
	return (
		<div className="App">
			<NavBar />
			<HomePage />
			<Footer />
		</div>
	);
}

export default App;
