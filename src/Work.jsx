import WorkStyle from "./modules/work.module.css";
import React from "react";
import Slider from "react-slick";

// Pages
import Page1 from "./Work pages/page1";
import Page2 from "./Work pages/page2";
import Page3 from "./Work pages/page3";
import Page4 from "./Work pages/page4";
import Page5 from "./Work pages/page5";

export default function Work() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="Work" className={WorkStyle.bigBox}>
      <Slider {...settings}>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
      </Slider>

      {/* <div className={WorkStyle.buttons}>
        <button className={WorkStyle.button3}>
          <img src="/photos/lightLeft.png" alt="Arrow pointing left" />
        </button>
        <button className={WorkStyle.button3}>
          <img src="/photos/darkRight.png" alt="Arrow pointing right" />
        </button>
      </div> */}
    </div>
  );
}
