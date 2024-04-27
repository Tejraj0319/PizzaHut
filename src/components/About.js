import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function About() {
    return (
        <div className='bg-dark text-white mt-5'>
            <Container>
                <Row className='align-items-center'>
                    <Col>
                        <img src='./images/about-img.png' alt='' className='img-fluid mx-auto d-block '/>
                    </Col>
                    <Col>
                        <h1 style={{fontFamily:"brush script mt"}}>We Are Feane</h1>

                        <p className='fs-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>

                        <Button variant="warning" className='text-white fs-5 px-4 rounded-pill'>Read More</Button>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default About
