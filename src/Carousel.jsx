import { useState } from "react";
import "./Carousel.css";

function Carousel({carousel_data}) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex(currentIndex === carousel_data.length - 1 ? 0 : currentIndex + 1);
	};

	const preSlide = () => {
		setCurrentIndex(currentIndex === 0 ? carousel_data.length - 1 : currentIndex - 1);
	};

	return (
		<div className="carousel-container">
			<i className="fa-solid fa-chevron-left left-arrow" onClick={preSlide}></i>
			<i className="fa-solid fa-chevron-right right-arrow" onClick={nextSlide}></i>
			<img src={carousel_data[currentIndex].image_path} className="carousel-item" alt={carousel_data[currentIndex].image_path}/>
		</div>
	);
}

export default Carousel;
