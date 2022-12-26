import "./Header.css";
import { useState } from "react";

function Header({ navigatePage,showHomeMenu, setShowHomeMenu }) {
	
	const [showGlobleMenu, setShowGlobleMenu] = useState(false);

	return (
		<header className="header">
            <button
				className="nav-menu-button"
				onClick={() => {
					setShowGlobleMenu(!showGlobleMenu);
				}}
				aria-label={showGlobleMenu ? "Close Menu" : "Open Menu"}
			>
				☰
			</button>
			
				<nav className={showGlobleMenu ? "global-nav open" : "global-nav"}>
					<li className="nav-list">
						<a
							href="/"
							onClick={(event) => {
								navigatePage(event, "Home");
								setShowHomeMenu((preState) => !preState);
							}}
						>
							Home
							{!showHomeMenu && <i className="fa-solid fa-chevron-right home-icon"></i>}
							{showHomeMenu && <i className="fa-solid fa-chevron-left home-icon"></i>}
						</a>
					</li>
					{showHomeMenu && (
						<div className="home-nav">
							<li className="home-nav-list">
								<a href="#intro">Intro</a>
							</li>
							<li className="home-nav-list">
								<a href="#about">About</a>
							</li>
							<li className="home-nav-list">
								<a href="#skills">Skills</a>
							</li>
							<li className="home-nav-list">
								<a href="#contact">Contact</a>
							</li>
						</div>
					)}

					<li className="nav-list">
						<a
							href="/code"
							onClick={(event) => {
								navigatePage(event, "Code");
								setShowHomeMenu(false);
							}}
						>
							Code
						</a>
					</li>
					<li className="nav-list">
						<a
							href="/design"
							onClick={(event) => {
								navigatePage(event, "Design");
								setShowHomeMenu(false);
							}}
						>
							Design
						</a>
					</li>
				</nav>
			
			
		</header>
	);
}
export default Header;
