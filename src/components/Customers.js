import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { Container } from 'react-bootstrap';


function Customers() {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <FaChevronCircleLeft />,
        prevArrow: <FaChevronCircleRight />

    };
    return (
        <div className='container mt-5'>
     
            <h1 style={{ fontFamily: 'brush script mt' }}>What says our Customers</h1>
            <div className="slider-container">
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                    <div className='p-4'>
                        <div className='text-white bg-dark'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga similique aut ipsa obcaecati aspernatur in architecto saepe labore tempore.</p>
                            <h5>Moana Michell</h5>
                            <p>Moana Aliqua</p>
                        </div>
                        <img src='./images/client1.jpg' alt='Moana' className='img-fluid mx-auto rounded-circle d-block border border-4 border-warning  mt-3 h-25 w-25 float-start' />
                    </div>
                    <div className='p-4'>
                        <div className='text-white bg-dark'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga similique aut ipsa obcaecati aspernatur in architecto saepe labore tempore.</p>
                            <h5>Moana Michell</h5>
                            <p>Moana Aliqua</p>
                        </div>
                        <img src='./images/client2.jpg' alt='Moana' className='img-fluid mx-auto rounded-circle d-block border border-4 border-warning  mt-3 h-25 w-25 float-start' />
                    </div>
                    <div className='p-4'>
                        <div className='text-white bg-dark'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga similique aut ipsa obcaecati aspernatur in architecto saepe labore tempore.</p>
                            <h5>Moana Michell</h5>
                            <p>Moana Aliqua</p>
                        </div>
                        <img src='./images/client1.jpg' alt='Moana' className='img-fluid mx-auto rounded-circle d-block border border-4 border-warning  mt-3 h-25 w-25 float-start' />
                    </div>
                    <div className='p-4'>
                        <div className='text-white bg-dark'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga similique aut ipsa obcaecati aspernatur in architecto saepe labore tempore.</p>
                            <h5>Moana Michell</h5>
                            <p>Moana Aliqua</p>
                        </div>
                        <img src='./images/client2.jpg' alt='Moana' className='img-fluid mx-auto rounded-circle d-block border border-4 border-warning mt-3 h-25 w-25 float-start' />
                    </div>
                </Slider>
                <FaChevronCircleLeft className='text-warning fs-1 me-2' onClick={previous} />
                <FaChevronCircleRight className='text-warning fs-1 me-2' onClick={next} />

            </div>

        </div>
    )
}

export default Customers
