import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { assets } from "../../assets/assets";



function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img src={assets.bg} className="image" />
            <Carousel.Caption>
              <span className="carosel-title">Beach</span><br/>
              <span>Sri Lanka's beaches, like those in Unawatuna and Mirissa, offer golden sands, turquoise waters, and vibrant marine life, perfect for surfing, snorkeling, and relaxation, along with rich cultural experiences nearby.</span>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={assets.bg2} className="image" />
            <Carousel.Caption>
              <span className="carosel-title">Nine Arch Bridge</span><br/>
              <span>The Nine Arch Bridge in Ella, Sri Lanka, is a stunning colonial-era structure amidst lush greenery, popular for its scenic beauty.</span>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={assets.bg3} className="image" />
            <Carousel.Caption>
              <span className="carosel-title">Kandy Lake</span><br/>
              <span>Kandy Lake, also known as Kiri Muhuda, is a serene man-made lake in the heart of Kandy, surrounded by lush greenery and historical landmarks. Built by King Sri Wickrama Rajasinghe in 1807, it provides a tranquil setting for leisurely strolls and picturesque views, especially near the Temple of the Tooth.</span>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={assets.bg4} className="image" />
            <Carousel.Caption>
              <span className="carosel-title">Sigiriya Antient  Rock</span><br/>
              <span>Sigiriya, or Lion Rock, is a 5th-century fortress in Sri Lanka, famed for its frescoes, water gardens, and panoramic views, reflecting the island's rich historical heritage.</span>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="title-container">
        <h3>SR Recuiters and Travellers</h3>
        <h4>We Are From Sri Lanka</h4>
      </div>
      <div id="employee" className="employee-btn-container">
        <button onClick={()=>navigate("/employee")}>See Employees</button>
      </div>
    </>
  );
}

export default Home;
