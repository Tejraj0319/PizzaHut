import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { FaCartShopping } from "react-icons/fa6";
import About from './About';
import Booking from './Booking';
import Customers from './Customers';

function Home() {
  return (
    <div>
      <Carousel className='bgimage text-white p-5'>


        <Carousel.Item>
          <div className='w-50 text-start p-5 mb-5'>
            <h1 className='display-3' style={{ fontFamily: "brush script mt" }}>Fast food restaunt</h1>
            <p className='fs-5'>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam</p>
            <Button variant="warning" className='text-white fs-5 px-4 rounded-pill mt-4'>Order Now</Button>
          </div>
        </Carousel.Item>


        <Carousel.Item>
          <div className='w-50 text-start p-5 mb-5'>
            <h1 className='display-3' style={{ fontFamily: "brush script mt" }}>Fast food restaunt</h1>
            <p className='fs-5'>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam</p>
            <Button variant="warning" className='text-white fs-5 px-4 rounded-pill mt-4'>Order Now</Button>
          </div>
        </Carousel.Item>


        <Carousel.Item>
          <div className='w-50 text-start p-5 mb-5'>
            <h1 className='display-3' style={{ fontFamily: "brush script mt" }}>Fast food restaunt</h1>
            <p className='fs-5'>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam</p>
            <Button variant="warning" className='text-white fs-5 px-4 rounded-pill mt-4'>Order Now</Button>
          </div>
        </Carousel.Item>
      </Carousel>




      <Container>
        <div className="row mt-5 gap-4">

          <div className="col">
            <div className='row bg-dark text-white rounded'>
              <div className='col-4 p-4'>
                <img src='./images/o1.jpg' className='image1 rounded-circle border border-warning border-4 h-100 w-100' />
              </div>
              <div className='col-8 p-4 text-start'>
                <h2 style={{ fontFamily: "brush script mt" }}>Teaty Thursdays</h2>
                <h1 className='display-6' style={{ fontFamily: "brush script mt" }}>20% <span className='fs-4'>off</span></h1>
                <Button variant="warning" className='text-white fs-5 px-4 rounded-pill'>Order Now<FaCartShopping /></Button>
              </div>
            </div>
          </div>



          <div className="col">
            <div className='row bg-dark text-white rounded'>
              <div className='col-4 p-4'>
                <img src='./images/o2.jpg' className='image1 rounded-circle border border-warning border-4 h-100 w-100' />
              </div>
              <div className='col-8 p-4 text-start'>
                <h2 style={{ fontFamily: "brush script mt" }}>Pizza days</h2>
                <h1 className='display-6' style={{ fontFamily: "brush script mt" }}>50% <span className='fs-4'>off</span></h1>
                <Button variant="warning" className='text-white fs-5 px-4 rounded-pill'>Order Now<FaCartShopping /></Button>
              </div>
            </div>
          </div>

        </div>
      </Container>

      <About />
      <Booking />
      <Customers />


    </div>
  )
}

export default Home
