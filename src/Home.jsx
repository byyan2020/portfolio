import "./Home.css";
import Modal from "./Modal";

function Home({ navigatePage, setShowHomeMenu }) {
	return (
		<>
			<section id="intro">
				<div className="intro-text">
					<h1 className="intro-title">
						Hi, I am <span className="intro-title-name">Biyu Yan.</span>
						<br />I am a...
					</h1>
					<h2 className="intro-secondary-title">
						<a
							href="/code"
							onClick={(event) => {
								navigatePage(event, "Code");
								setShowHomeMenu(false);
							}}
						>
							Programmer
						</a>
					</h2>
					<h2 className="intro-secondary-title">
						<a
							href="/design"
							onClick={(event) => {
								navigatePage(event, "Design");
								setShowHomeMenu(false);
							}}
						>
							Designer
						</a>
					</h2>
				</div>
			</section>

			<section id="about">
				<div className="about-text">
					<h2 className="about-title">About</h2>
					<br />
					<p>
						I am a graduate student majoring in Information Systems at Northeastern University,
						Seattle campus. Before I came to US, I majored in architecture as an undergraduate and
						later joined HKS architects. I worked as computational designer to develop tools with
						python and Javascript to improve design efficiency and building performance. I also love
						to build my own applications to craft my skills. Along the way, I have built skills on
						full-stack web development. By understanding user requirements as well as overall system
						architecture, I can deliver products with both great performance and easy-to-use
						experience. I am always happy to learn new technologies and facing new challenges. I
						want to utilize my technical skills and interdisciplinary perspectives to make
						meaningful impact on products I like.
					</p>
				</div>
				<div className="about-board">
					<img src="biyu.jpg" className="about-img" alt="smiling Biyu" />
				</div>
			</section>

			<section id="skills">
				<h2 className="skills-title">Skills</h2>
				<div className="skill-cards">
					<div className="skill-card">
						<h3 className="card-title">Programming Language</h3>
						<ul className="card-list">
							<li className="card-item">Python</li>
							<li className="card-item">JavaScript</li>
							<li className="card-item">Java</li>
							<li className="card-item">HTML</li>
							<li className="card-item">CSS</li>
						</ul>
					</div>

					<div className="skill-card">
						<h3 className="card-title">Frameworks / Library</h3>
						<ul className="card-list">
							<li className="card-item">React.js</li>
							<li className="card-item">Node.js</li>
							<li className="card-item">Express.js</li>
							<li className="card-item">Three.js</li>
							<li className="card-item">Django</li>
							<li className="card-item">Flask</li>
						</ul>
					</div>

					<div className="skill-card">
						<h3 className="card-title">Database</h3>
						<ul className="card-list">
							<li className="card-item">MongoDB</li>
							<li className="card-item">MySQL</li>
							<li className="card-item">Redis</li>
						</ul>
					</div>

                    <div className="skill-card">
						<h3 className="card-title">Tools</h3>
						<ul className="card-list">
							<li className="card-item">Git</li>
							<li className="card-item">Heroku</li>
							<li className="card-item">Firebase</li>
							<li className="card-item">Figma</li>
							<li className="card-item">Adobe Suite</li>
							<li className="card-item">Autodesk Suite</li>
							<li className="card-item">Rhinoceros 3D</li>
						</ul>
					</div>
				</div>
			</section>

			<section id="contact">
				<h2>Contact Me</h2>
				<div className="contact-links">
					<a
						className="contact-link"
						href="mailto: yanbiyu2019@outlook.com"
						aria-label="Email to Biyu"
					>
						<i className="fa-regular fa-envelope"></i>
					</a>

					<a
						className="contact-link"
						href="https://www.linkedin.com/in/biyu-yan/"
						aria-label="Linkedin link"
					>
						<i className="fa-brands fa-linkedin"></i>
					</a>
					<a className="contact-link" href="https://github.com/byyan2020" aria-label="Github Link">
						<i className="fa-brands fa-github"></i>
					</a>
				</div>
				<Modal />
			</section>
		</>
	);
}

export default Home;
