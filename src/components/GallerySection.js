import Slider from "react-slick";
import { sliderActive5Item } from "../sliderProps";
import { urlFor } from "@/utils/client";
const GallerySection = ({gallery}) => {
  return (
    <section id="gallery" className="gallery-section mbm-150">
      <div className="container-fluid">
        <Slider
          {...sliderActive5Item}
          className="slider-active-5-item wow fadeInUp"
        >
          {/*=== Single Gallery Item ===*/}
          {
            gallery?.map((item)=>(
              <div className="single-gallery-item">
            <div className="gallery-img">
              <img src={urlFor(item?.galleryImage)} alt="Gallery Image" />
              <div className="hover-overlay">
                <a
                  href={urlFor(item?.galleryImage)}
                  className="icon-btn img-popup"
                >
                  <i className="far fa-plus" />
                </a>
              </div>
            </div>
          </div>
            ))
          }
          
          {/*=== Single Gallery Item ===*/}
         
         
        
        
        </Slider>
      </div>
    </section>
  );
};
export default GallerySection;
