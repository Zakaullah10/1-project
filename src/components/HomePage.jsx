import React from "react";
import Navbar from "./Navbar";
import { Home, Image1, baloon } from "./assets";
import Footer from "./Footer";

import Datashop from "./Datashop";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Whyuscards from "./Whyuscards";

import Tpage from "./Tpage";
import Cpage from "./Cpage";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";

import "../App.css";

export const HomePage = () => {
  
  return (
    <div className="home">
     
      <>
      <Swiper spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay]}
        className="mySwiper">
        <SwiperSlide style={{display:'flex', backgroundColor:'lightgray'}}>  <div className="homepage">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
          }}
        >
          <div className="img-2">
            <h1 className="h1-1">
              {" "}
              Welcome To Our <br />
              Gift Shop
            </h1>
            <h3 style={{ paddingBottom: "30px" }}>
              Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet
              non necessitatibus error distinctio mollitia suscipit. Nostrum
              fugit doloribus consequatur distinctio esse, possimus maiores
              aliquid repellat beatae cum, perspiciatis enim, accusantium
              perferendis.
            </h3>
            <button className="btn">CONTANT US</button>
          </div>
        </div>
        <div className="image-1">
          <img className="img" src={Home} />
        </div>
      </div></SwiperSlide>
      <SwiperSlide style={{display:'flex', backgroundColor:'lightgray'}}>  <div className="homepage">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
          }}
        >
          <div className="img-2">
            <h1 className="h1-1">
              {" "}
              Welcome To Our <br />
              Gift Shop
            </h1>
            <h3 style={{ paddingBottom: "30px" }}>
              Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet
              non necessitatibus error distinctio mollitia suscipit. Nostrum
              fugit doloribus consequatur distinctio esse, possimus maiores
              aliquid repellat beatae cum, perspiciatis enim, accusantium
              perferendis.
            </h3>
            <button className="btn">CONTANT US</button>
          </div>
        </div>
        <div className="image-1">
          <img className="img" src={Home} />
        </div>
      </div></SwiperSlide>
      <SwiperSlide style={{display:'flex', backgroundColor:'lightgray'}}>  <div className="homepage">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
          }}
        >
          <div className="img-2">
            <h1 className="h1-1">
              {" "}
              Welcome To Our <br />
              Gift Shop
            </h1>
            <h3 style={{ paddingBottom: "30px" }}>
              Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet
              non necessitatibus error distinctio mollitia suscipit. Nostrum
              fugit doloribus consequatur distinctio esse, possimus maiores
              aliquid repellat beatae cum, perspiciatis enim, accusantium
              perferendis.
            </h3>
            <button className="btn">CONTANT US</button>
          </div>
        </div>
        <div className="image-1">
          <img className="img" src={Home} />
        </div>
      </div></SwiperSlide>
      <SwiperSlide style={{display:'flex', backgroundColor:'lightgray'}}>  <div className="homepage">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
          }}
        >
          <div className="img-2">
            <h1 className="h1-1">
              {" "}
              Welcome To Our <br />
              Gift Shop
            </h1>
            <h3 style={{ paddingBottom: "30px" }}>
              Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet
              non necessitatibus error distinctio mollitia suscipit. Nostrum
              fugit doloribus consequatur distinctio esse, possimus maiores
              aliquid repellat beatae cum, perspiciatis enim, accusantium
              perferendis.
            </h3>
            <button className="btn">CONTANT US</button>
          </div>
        </div>
        <div className="image-1">
          <img className="img" src={Home} />
        </div>
      </div></SwiperSlide>
      </Swiper>
    </>
    
      <div style={{ width: "95%" }}>
        <Datashop />
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center",  marginTop:'60px'}}>
        <div className="hp1">
          <div
            style={{
              width: "60%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              height: "100%",
            }}
          >
            <img src={Image1} />
          </div>
          <div
            style={{
              width: "40%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div>
              <h1>
                BEST SAVINGS ON
                <br />
                NEW ARRIVALS
              </h1>
            </div>
            <div>
              <h4>
                Qui ex dolore at repellat, quia neque doloribus omnis
                <br />
                adipisci, ipsum eos odio fugit ut eveniet blanditiis <br />
                praesentium totam non nostrum dignissimos nihil eius
                <br />
                facere et eaque. Qui, animi obcaecati.
              </h4>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button className="btn2">Buy Now</button>
              <button className="btn2">See More</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <Whyuscards />
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: " 40px",
        }}
      >
        <div className="hp2">
          <div
            style={{
              width: "55%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img style={{ width: "60%" }} src={baloon} />
          </div>
          <div
            style={{
              width: "45%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div>
              <h1>
                GIFTS FOR YOUR
                <br />
                LOVED ONES
              </h1>
            </div>
            <div>
              <h4>
                Qui ex dolore at repellat, quia neque doloribus omnis
                <br />
                adipisci, ipsum eos odio fugit ut eveniet blanditiis <br />
                praesentium totam non nostrum dignissimos nihil eius
                <br />
                facere et eaque. Qui, animi obcaecati.
              </h4>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button className="btn2">Buy Now</button>
              <button className="btn2">See More</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        {" "}
        <Tpage />
      </div>
      <div style={{ width: "100%", marginTop: "40Px" }}>
        <Cpage />
      </div>

      <Footer />
    </div>
  );
};
