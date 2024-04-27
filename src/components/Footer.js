import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";

function Footer() {
    return (
        <div className='bg-dark text-white'>
            <Container>
                <div className='row mt-5 p-5'>
                    <div className='col'>
                        <h2 className='mb-3' style={{ fontFamily: "brush script mt" }}>Contact Us</h2>

                        <p><Link to='/' className='text-white'> <FaLocationDot /> Location</Link></p>

                        <p><Link to='/' className='text-white'><BsFillTelephoneFill /> Call +01 1234567890</Link></p>

                        <p><Link to='/' className='text-white'><FaEnvelope /> feane@gmail.com</Link></p>
                    </div>






                    <div className='col'>
                        <h2 className='mb-3' style={{ fontFamily: "brush script mt" }}>Feane</h2>
                        <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>

                        <Link className='fs-3 text-white me-2'><BsFacebook /></Link>

                        <Link className='fs-2 text-white me-2'><AiFillTwitterCircle /></Link>

                        <Link className='fs-2 text-white me-2'><TiSocialLinkedinCircular className='bg-white rounded-circle text-dark ' /></Link>

                        <Link className='fs-2 text-white me-2'>< FaInstagram className='bg-white rounded-circle text-dark p-1'/></Link>

                        <Link className='fs-3 text-white me-2'><BsPinterest /></Link>
                    </div>



                    <div className='col'>
                        <h2 className='mb-3' style={{ fontFamily: "brush script mt" }}>Opening Hours</h2>
                        <p>Every day</p>
                        <p>10.00 Am -10.00 Pm</p>
                    </div>
                </div>



                <div className='row mt-5 p-4'>
                    <p>© 2024 All Rights Reserved By Free Html Templates</p>
                </div>

                
                <div className='row pb-5'>
                    <p>© Distributed By ThemeWagon</p>
                </div>
            </Container>

        </div>
    )
}

export default Footer
