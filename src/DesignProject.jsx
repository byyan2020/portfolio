import Carousel from "./Carousel";
import design_project from "./design_project";


function DesignProject({page}) {
    const index = page[page.length - 1] - 1;
    console.log(index)
  return (
    <div className="design-project">
        <Carousel carousel_data={design_project[index]}/>
    </div>
  )
}

export default DesignProject