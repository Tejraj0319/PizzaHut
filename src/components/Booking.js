import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function Booking() {
    return (
        <div>
            <Container className='mt-5'>
                <h1 className='text-start' style={{ fontFamily: "brush script mt" }}>Book a table</h1>
                <Row>



                    <Col>
                        <Form className='mt-4'>
                            <Form.Group controlId="exampleForm.ControlInput1" className='mb-3'>
                                <Form.Control type="text" placeholder="Your name" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlInput2" className='mb-4'>
                                <Form.Control type="text" placeholder="Phone number" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlInput3" className='mb-4'>
                                <Form.Control type="email" placeholder="Your email" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect1" className='mb-4'>
                                <Form.Control as="select">
                                    <option>Haw meny persons?</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlInput4" className='mb-4'>
                                <Form.Control type="date" />
                            </Form.Group>

                            <Button variant="warning" className='text-white fs-5 px-4 rounded-pill mt-4 float-start'>Book Now</Button>
                        </Form>
                    </Col>





                    <Col>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2749534802656!2d73.8396689742373!3d18.51647306930132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c077fb3b7107%3A0x971d551b0ffecc71!2sDomino&#39;s%20Pizza!5e0!3m2!1sen!2sin!4v1711084727981!5m2!1sen!2sin" width="600" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='rounded'></iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Booking
