
import Layout from "@/src/layout/Layout";
import {
  sliderActive3Item,
  sliderActive4Item,
  testimonialSliderOne,
  sliderActive3ItemDot,
  sliderActive5Item,
} from "@/src/sliderProps";
import { home2Slider } from "@/src/sliderProps";
import { client } from "@/utils/client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";

import { urlFor } from "@/utils/client";
import ContactForm from "@/src/components/ContactForm";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const Index = ({gallery}) => {
 console.log(gallery)
  return (
    <Layout header={2} noFooter>
      {/*====== Start Hero Section ======*/}
      <section className="hero-section">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper-two">
          {/*=== Hero Slider ===*/}
          <Slider {...home2Slider} className="hero-slider-two">
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/hero/hero-two_img-1.jpg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <span className="ribbon">Welcome To</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Powai Banquet Hall
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/#enquiry">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/hero/hero-two_img-2.jpg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <span className="ribbon">Welcome To</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                        Powai Banquet Hall
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/hero/hero-two_img-3.jpg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <span className="ribbon">Welcome To</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                      Powai Banquet Hall
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/hero/hero-two_img-4.jpg)",
                }}
              />
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-xl-9">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white text-center">
                      <span className="ribbon">Welcome To</span>
                      <h1 data-animation="fadeInDown" data-delay=".4s">
                      Powai Banquet Hall
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start About Section ======*/}
      <section id="about" className="about-section pt-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-9">
              {/*=== About Content Box ===*/}
              <div className="about-content-box text-center mb-55 wow fadeInDown">
                <div className="section-title mb-30">
                  <span style={{fontSize: "20px"}} className="sub-title">About Hall</span>
                  <h2>WELCOME TO POWAI BANQUET HALL</h2>
                </div>
                <p>
                Powai Banquet Hall is one of the most contemporary and technologically advanced banquet halls in Powai. We offer specialized, all inclusive amenities and services which set us apart from the competition like changing rooms , Vallet parking, projectors and screen , Theme decorations and many more. Whether it's a wedding or our baby shower theme party or Themed birthday celebrations, we have considered every detail and perfected your experience at Powai Banquet Hall. We take pride in the versatility and quality of our venue and services. Our management and staff work tirelessly to ensure that all events go above and beyond your expectations. Whether it’s a corporate event or your wedding day, let’s make it a one of a kind experience
                </p>
              </div>
            </div>
          </div>
          <div className="about-content-box text-center mb-40 wow events fadeInDown"><span style={{fontSize: "22px", marginTop:"50px"}}className="sub-title">What We Do</span></div>
          <Slider
            {...sliderActive4Item}
            className="slider-active-4-item wow fadeInUp"
          >
            {/*=== Features Image Item ===*/}
            
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-1.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Weddings and Receptions</h4>
                    
                  </div>
                 
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-2.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Baby Shower and Aqiqa ceremony</h4>
                  
                  </div>
                 
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-3.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Anniversary celebrations</h4>
                  
                  </div>
                
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-4.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Birthday Bash</h4>
                 
                  </div>
                 
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-16.jpeg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Corporate Events</h4>
                   
                  </div>
                 
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-15.jpg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Haldi and Mehendi</h4>
                  
                  </div>
                 
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-17.jpeg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Roka and Ring Ceremony</h4>
                 
                  </div>
                 
                </div>
              </div>
            </div>
            {/*=== Features Image Item ===*/}
            <div className="single-features-item mb-40">
              <div className="img-holder">
                <img
                  src="assets/images/features/feat-18.jpeg"
                  alt="Features Image"
                />
                <div className="content">
                  <div className="text">
                    <h4 className="title">Exhibitons</h4>
                    
                  </div>
                 
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Venue Section ======*/}
      <section style={{position: "relative", margin: "50px auto 50px auto"  }}>
        <div className="about-content-box text-center mb-40 wow events fadeInDown"><span style={{fontSize: "24px"}}className="sub-title">Venue</span>
        </div>
        <div> 
        
          <img style={{opacity: "0.8", position: 'absolute', width: '100%', top: '60px', left: '0', objectFit: 'cover',zIndex: '0'}} src="./assets/images/bg/Venue (3) (1).jpg" alt="venue Image" />
        </div>
        <div style={{margin: "28vw 10vw 10vw", zIndex:"1", position: "relative" , overflow: "hidden",  backgroundColor: "#eff6ec", padding: "1.875rem 1.25rem", borderRadius:"10px"}}>
          <p style={{textAlign: "center",fontFamily:' "Prompt", sansSerif', fontSize: "16px",fontWeight:"400",letterSpacing: "0",color:"#000"}}>
            Our venue is newly renovated and designed to serve events from 600-650 people. This venue has multiple banquet halls which provides both AC and Non AC facilities. The venue is about 6,000 square feet total which consists of 2 floor, 1st floor has 2,500 square feet and 2nd floor has 3500 square feet and boasts a luxurious grand foyer, 2 changing rooms. The large dance floor, where the speakers and projects are focused on can be changed with custom themes to fit your event or personality. Our kitchen has a safe working environment and contains the latest in cooking appliances to ensure your food arrives on time and perfectly prepped.
          </p>
        </div>

      </section>
      {/*====== End Venue Section ======*/}
      

      {/*====== Start Services Section ======*/}
      <section id="service" className="services-section black-bg pt-100 pb-100 mt-50">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              {/*=== Section Title ===*/}
              <div className="section-title text-center text-white mb-50 wow fadeInDown">
                <span className="sub-title">What We Provide</span>
                <h2>Popular Services that enhances your experience </h2>
              </div>
            </div>
          </div>
          {/*=== Service Slider One ===*/}
          <Slider
            {...sliderActive4Item}
            className="slider-active-4-item wow fadeInUp"
          >
            {/*=== Single Service Item ===*/}
            <div className="single-service-item-two">
              <div
                className="hover-bg bg_cover"
                style={{
                  backgroundImage: "url(assets/images/service/hover-bg.jpeg)",
                }}
              />
              <div className="content">
                <div className="icon">
                <i className="fi fi-tr-globe-snow"></i>
                </div>
                <h3 className="title">
                  <a href="#">Theme Decoration</a>
                </h3>
                
              </div>
            </div>
            {/*=== Single Service Item ===*/}
            <div className="single-service-item-two">
              <div
                className="hover-bg bg_cover"
                style={{
                  backgroundImage: "url(assets/images/service/hover-bg.jpeg)",
                }}
              />
              <div className="content">
                <div className="icon">
                <i class="fi fi-rr-room-service"></i>
                </div>
                <h3 className="title">
                  <a href="#">Catering Services</a>
                </h3>
              
              </div>
            </div>
            {/*=== Single Service Item ===*/}
            <div className="single-service-item-two">
              <div
                className="hover-bg bg_cover"
                style={{
                  backgroundImage: "url(assets/images/service/hover-bg.jpeg)",
                }}
              />
              <div className="content">
                <div className="icon">
                <i class="fi fi-rr-list-music"></i>
                </div>
                <h3 className="title">
                  <a href="#">Music & Melody</a>
                </h3>
              
              </div>
            </div>
            {/*=== Single Service Item ===*/}
            <div className="single-service-item-two">
              <div
                className="hover-bg bg_cover"
                style={{
                  backgroundImage: "url(assets/images/service/hover-bg.jpeg)",
                }}
              />
              <div className="content">
                <div className="icon">
                <i className="fi fi-rr-cars"></i>
                </div>
                <h3 className="title">
                  <a href="#">Parking</a>
                </h3>
                
              </div>
            </div>
            {/*=== Single Service Item ===*/}
            <div className="single-service-item-two">
              <div
                className="hover-bg bg_cover"
                style={{
                  backgroundImage: "url(assets/images/service/hover-bg.jpeg)",
                }}
              />
              <div className="content">
                <div className="icon">
                <i class="fi fi-ts-snow-blowing"></i>
                </div>
                <h3 className="title">
                  <a href="#">AC &amp; Non-AC </a>
                </h3>
              
              </div>
            </div>
            <div className="single-service-item-two">
              <div
                className="hover-bg bg_cover"
                style={{
                  backgroundImage: "url(assets/images/service/hover-bg.jpeg)",
                }}
              />
              <div className="content">
                <div className="icon">
                <i className="fi fi-ts-projector"></i>
                </div>
                <h3 className="title">
                  <a href="#">Visual Equipments</a>
                </h3>
              
              </div>
            </div>
             {/*=== Single Service Item ===*/}
            <div className="single-service-item-two">
              <div
                className="hover-bg bg_cover"
                style={{
                  backgroundImage: "url(assets/images/service/hover-bg.jpeg)",
                }}
              />
              <div className="content">
                <div className="icon">
                <i className="fi fi-tr-camera-movie"></i>
                </div>
                <h3 className="title">
                  <a href="#">Photographer</a>
                </h3>
             
              </div>
            </div>
              {/*=== Single Service Item ===*/}
              <div className="single-service-item-two">
              <div
                className="hover-bg bg_cover"
                style={{
                  backgroundImage: "url(assets/images/service/hover-bg.jpeg)",
                }}
              />
              <div className="content">
                <div className="icon">
                <i class="fi fi-tr-restroom-simple"></i>
                </div>
                <h3 className="title">
                  <a href="#">Changing Rooms</a>
                </h3>
               
              </div>
            </div>
              {/*=== Single Service Item ===*/}
              <div className="single-service-item-two">
              <div
                className="hover-bg bg_cover"
                style={{
                  backgroundImage: "url(assets/images/service/hover-bg.jpeg)",
                }}
              />
              <div className="content">
                <div className="icon">
                <i class="fi fi-rr-pencil-paintbrush"></i>
                </div>
                <h3 className="title">
                  <a href="#">Tattoo Artist</a>
                </h3>
               
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Services Section ======*/}
            {/*====== Start Features Section ======*/}
       <div className="section-title text-center mb-60 wow fadeInDown">
          <span style={{fontSize:"22px", marginTop:"50px"}} className="sub-title">Food &amp; Beverages</span>
          <h2>Where food and hospitality meet</h2>
       </div>
      <section className="features-section pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="fi fi-rr-plate"/>
                </div>
                <div className="text">
                  <h4 className="title">Plated Dinners</h4>
                  <p>
                    Farm-to-table ingredients for a fresh and flavorful dining experience
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="fi fi-sr-utensils"/>
                </div>
                <div className="text">
                  <h4 className="title">Buffet Stations</h4>
                  <p>
                    Extensive selection of appetizers, main courses, and desserts
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="fi fi-ts-glass-citrus"/>
                </div>
                <div className="text">
                  <h4 className="title">Cocktail Receptions</h4>
                  <p>
                    Stylish food displays and action stations for a visually appealing setup
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="fi fi-ts-pie"/>
                </div>
                <div className="text">
                  <h4 className="title">Dessert Stations</h4>
                  <p>
                     Artfully crafted dessert displays for a visually stunning finale
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                <i className="fi fi-rs-cocktail"/>
                </div>
                <div className="text">
                  <h4 className="title">Beverage Packages</h4>
                  <p>
                    Non-alcoholic beverage options including artisanal sodas and fresh juices
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12">
              {/*=== Fancy Icon Box ===*/}
              <div className="fancy-icon-box mb-30 wow fadeInUp">
                <div className="icon">
                 <i class="fi fi-rr-grill"/>
                </div>
                <div className="text">
                  <h4 className="title">Multiple Cuisines and starters</h4>
                  <p>
                    Customizable menu options to suit individual preferences.
                    A selection of international cuisines to choose from.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/* start testimonial section */}
      
       {/*====== Start Testimonial Section ======*/}
       <section
        className="testimonial-section bg_cover pt-100 pb-100"
        style={{ backgroundImage: "url(assets/images/bg/map-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="section-title text-center text-white mb-60">
                <span style={{fontSize:"22px"}} className="sub-title">Testimonials</span>
                <h2>What Our Customers Say About Our Services</h2>
              </div>
            </div>
          </div>
          <Slider
            {...sliderActive3ItemDot}
            className="slider-active-3-item-dot"
          >
            <div className="gw-testimonial-item-two">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h4>Quality Services</h4>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                Very best place for function.. all the decoration, management and the best part was Anchor we got for my son's first birthday... Anchor was truly amazing he kept everyone busy throughout the party and the food also was yummy
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="https://lh3.googleusercontent.com/a-/AD_cMMSbfavDUux-vxmqUU_cgfgw0ZxNPWiI9nxUnY03fdfaUhM=w75-h75-p-rp-mo-br100"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h3 className="title">Dhanashri Bulbule</h3>
                    <p className="position">Birthday Party</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gw-testimonial-item-two">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h4>Quality Management</h4>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                 The management of the birthday party was really very good. The decoration was superb by the team of Powai banquet hall. This is one of the best banquet hall in Powai. I love the decoration,food & management of the team.Great work Powai banquet hall.
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="https://lh3.googleusercontent.com/a/AAcHTtcqGYfgpPVc-epwqTGVI5mVAWUh5oO4q8BhgVf9p4M=w75-h75-p-rp-mo-br100"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h3 className="title">Prabhakar Kamble</h3>
                    <p className="position">Party</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gw-testimonial-item-two">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h4>Quality Food</h4>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                Best place for family function. I like the decoration and management. The birthday was very well organised by the Powai banquet hall team. The food was too yummy 😋 specifically dessert. We can even host wedding and many more events . Its very spacious.
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="https://lh3.googleusercontent.com/a/AAcHTtfN_r4YBwv0IBpKwtDPJn2NlhtZ_ZVNwp4tKoWcKpoJ=w75-h75-p-rp-mo-br100"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h3 className="title">Mayuresh Kamble</h3>
                    <p className="position">Party</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gw-testimonial-item-two">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h4>Quality Staff</h4>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                It's very good place for party.nice ambiance good service and food. Good place, parking available, hygiene, well maintained staff🤩for all functions. Hall is very good at affordable price. Really good decorated banquet hall. The service and quality is really good !
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="https://lh3.googleusercontent.com/a/AAcHTtfS4DgdSqJqT9LB4_f-2XfEa09sjt2jdo4RYNqUmARe=w75-h75-p-rp-mo-br100"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h3 className="title">Zeenat Shaikh</h3>
                    <p className="position">wedding Party</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      
      {/* end testimonial section */}
      {/* start steps to book secrion */}
      <section>
      
        <div className="section-title text-center mb-60 wow fadeInDown">
            <span style={{fontSize:"22px", marginTop:"50px"}} className="sub-title">Steps to Book an Event</span>
        </div>

        <div class="row  d-flex justify-content-between  pr-90 pl-90" >
        <div style={{position: "relative"}} className="col-lg-4 col-md-12 col-12 p-2">
            <h2 style={{    backgroundColor: "#fff", display: "block", width: "120px", height: "120px", textAlign: "center", position: "inherit", borderRadius: "60px", color: "#2f4d4b", font:'500 100px/85px "Playfair Display", serif', margin: "50px auto -60px"}}>1</h2>
            <div> 
              <div style={{font:'500 19px "Cinzel", serif', width: "100%", minHeight: "180px",  display: "block",  margin: "0 auto",  textAlign: "center", backgroundColor: "#faf7f2", zIndex: "10", color: "#2f4d4b", padding: "80px 38px 20px", letterSpacing: "0"}}> 
                SCHEDULE AN APPOINTMENT FOR A TOUR 
              </div>
              <div style={{margin: "20px auto", textAlign: "left",  width: "100%",  letterSpacing: "0", color: "#000" , fontFamily:' "Prompt", sansSerif', fontSize: "16px"}}>
                Take a tour and receive an introduction to packages and menu options with assigned manager.
              </div>
            </div>
            
        </div>
        <div style={{position: "relative"}} class="col-lg-4 col-md-12 col-12 p-2">
            <h2 style={{    backgroundColor: "#fff", display: "block", width: "120px", height: "120px",  textAlign: "center", position: "inherit", borderRadius: "60px", color: "#2f4d4b",  font:'500 100px/85px "Playfair Display", serif', margin: "50px auto -60px"}}>2</h2>
            <div> 
              <div style={{font:'500 19px "Cinzel", serif', width: "100%", minHeight: "180px",  display: "block",  margin: "0 auto",  textAlign: "center", backgroundColor: "#faf7f2", zIndex: "10", color: "#2f4d4b", padding: "80px 38px 20px", letterSpacing: "0"}}> 
                CONTRACT SIGNING 
              </div>
              <div style={{fontFamily:' "Prompt", sansSerif', fontSize: "16px",margin: "20px auto", textAlign: "left",  width: "100%",  letterSpacing: "0", color: "#000"}}>
               Meet our production managers to go over the entertainment packages and lighting options. Reserve date with 25%
              </div>
            </div>
            
        </div>
        <div style={{position: "relative"}} class="col-lg-4 col-md-12 col-12 p-2">
            <h2 style={{    backgroundColor: "#fff", display: "block", width: "120px", height: "120px", textAlign: "center", position: "inherit", borderRadius: "60px", color: "#2f4d4b",  font:'500 100px/85px "Playfair Display", serif', margin: "50px auto -60px"}}>3</h2>
            <div> 
              <div style={{font:'500 19px "Cinzel", serif', width: "100%", minHeight: "180px",  display: "block",  margin: "0 auto",  textAlign: "center", backgroundColor: "#faf7f2", zIndex: "10", color: "#2f4d4b", padding: "80px 38px 20px", letterSpacing: "0"}}> 
                DISCUSSING FINISHING TOUCHES
              </div>
              <div style={{fontFamily:' "Prompt", sansSerif', fontSize: "16px",margin: "20px auto", textAlign: "left",  width: "100%",  letterSpacing: "0", color: "#000"}}>
                Finalize the menu one month before the event and confirm the final count of the guests and floor plan two weeks before the event.
              </div>
            </div>
            
        </div>
    </div>
        {/* <div className="container-fluid ">
        <div  className="row wrapper d-flex justify-content-between pr-90 pl-90">
          <div className="col-lg-4 col-md-12 col-12 " style={{backgroundColor: "yellow" }}>
            <h2 style={{width:"120px"}} className="sub-title ">1</h2>
          </div>
          <div className="col-lg-4 col-md-12 col-12 " style={{}}> 
            <h2 style={{width:"120px"}} className="sub-title ">2</h2>
          </div>
          <div className="col-lg-4 col-md-12 col-12 " style={{}}>
            <h2 style={{width:"120px"}} className="sub-title ">3</h2>
          </div>

          </div>
      </div> */}


       </section>
      {/* ENd steps to book secrion */}


    





  
      {/*====== Start Booking Section ======*/}
   
      {/*====== End Hero Section ======*/}
    
  

      {/*====== Start CTA Section ======*/}
    <ContactForm />
    
      {/*====== Start Gallery Section ======*/}
      <section id="gallery" className="gallery-section mbm-150">
      <div className="container-fluid">
        <Slider
          {...sliderActive5Item}
          className="slider-active-5-item wow fadeInUp"
        >
          {/*=== Single Gallery Item ===*/}
          {
            gallery?.map((item)=>(
              <div key={item._id} className="single-gallery-item">
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
      {/*====== End Gallery Section ======*/}
      <footer className="main-footer black-bg pt-230">
        <div className="container">
          {/*=== Footer Top ===*/}
          <div className="footer-top pt-40 wow fadeInUp">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                {/*=== Single Info Item ===*/}
                <div className="single-info-item mb-40">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="info">
                    <span className="title">Location</span>
                    <p>At and Above Apna Dukan Supermarket Opp. IIT Maingate, next to Bata Showroom, Powai, Mumbai, Maharashtra 400076</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Single Info Item ===*/}
                <div className="single-info-item mb-40">
                  <div className="icon">
                    <i className="far fa-envelope-open" />
                  </div>
                  <div className="info">
                    <span className="title">Email</span>
                    <p>
                      <a href="mailto:support@gmail.com">powaibanquethall@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Single Info Item ===*/}
                <div className="single-info-item mb-40">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="info">
                    <span className="title">Hotline</span>
                    <p>
                      <a href="tel:+919892890123">+91 98928 90123</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Social Box ===*/}
                <div className="social-box mb-40 float-lg-end">
                  <ul className="social-link">
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100064056754300">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    
                    <li>
                      <a href="https://www.instagram.com/powaibanquethall?igsh=ZzRrbjNlODllcjA5">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  
                  </ul>
                </div>
              </div>
            </div>
          </div>
       
          {/*=== Footer Copyright ===*/}
          <div className="footer-copyright">
            <div className="row">
              <div className="col-lg-6">
                {/*=== Footer Text ===*/}
                <div className="footer-text">
                  <p>
                    Copy@ 2024 <span style={{ color: "#F7921E" }}>Powai Banquet Hall</span>
                    , All Right Reserved
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  

  const galleryQuery = `*[_type == "gallery" ]`
  const gallery = await client.fetch(galleryQuery);
  return {
    props: {gallery}
  }
}

export default Index; 
