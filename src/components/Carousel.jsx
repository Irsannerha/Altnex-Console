import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";

import ImageBgPlay1 from "../assets/img/bgPlay1.png";
import ImageBgPlay2 from "../assets/img/bgPlay2.png";
import ImageBgPlay3 from "../assets/img/bgPlay3.png";
import ImageBgPlay4 from "../assets/img/bgPlay4.png";
import ImageBgPlay5 from "../assets/img/bgPlay5.png";
import ImageBgPlay6 from "../assets/img/bgPlay6.png";

function CarouselItem() {
  return (
    <Carousel>
      <Carousel.Item>
        
        <CarouselImage text="First slide" image={ImageBgPlay1} />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <CarouselImage text="Second slide" image={ImageBgPlay2} />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <CarouselImage text="Third slide" image={ImageBgPlay3} />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <CarouselImage text="Fourd slide" image={ImageBgPlay4} />
        <Carousel.Caption>
          {/* <h3>Fourd slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Fourd slide" image={ImageBgPlay5} />
        <Carousel.Caption>
          {/* <h3>Fourd slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Fourd slide" image={ImageBgPlay6} />
        <Carousel.Caption>
          {/* <h3>Fourd slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselItem;
