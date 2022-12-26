import Home from "./Home";
import Code from "./Code";
import Design from "./Design";
import DesignProject from "./DesignProject";
import "./Main.css";

function Main({ page, navigatePage, showHomeMenu, setShowHomeMenu }) {
	return (
		<main id="main">
			{page === "Home" && <Home navigatePage={navigatePage} setShowHomeMenu={setShowHomeMenu}/>}
			{page === "Code" && <Code />}
			{page === "Design" && <Design navigatePage={navigatePage}/>}
			{page.includes('design_project') && <DesignProject page={page}/>}
		</main>
	);
}

export default Main;
