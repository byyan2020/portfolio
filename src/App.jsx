import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import SkipLink from "./SkipLink"
import { useState } from "react";

function App() {
	const [page, setPage] = useState("Home");
    const [showHomeMenu, setShowHomeMenu] = useState(false);

	const navigatePage = (event, pageName) => {
		event.preventDefault();
		setPage(pageName);
	};

	return (
		<div className="app">
            <SkipLink/>
			<Header navigatePage={navigatePage} showHomeMenu={showHomeMenu} setShowHomeMenu={setShowHomeMenu}/>
			<Main page={page} navigatePage={navigatePage} showHomeMenu={showHomeMenu} setShowHomeMenu={setShowHomeMenu}/>
			<Footer />
		</div>
	);
}

export default App;
