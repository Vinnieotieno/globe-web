import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Button, Form} from 'react-bootstrap'

const ContactPage = () => {
  return (
    <div>
        <Header/>
        <div style={{ height: '75vh', background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://media.istockphoto.com/id/1331571740/photo/transportation-and-technology-concept-its-mobility-as-a-service-telematics.webp?b=1&s=170667a&w=0&k=20&c=Fvsixm-qAR0Cki4lf0xajwjvXWpa9TgGaM770Fjq4gI=)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="row " >
                <div className="col-md-6 text-light " style={{marginTop:'20%'}}>
                    <div className="container">
                    <h2><b>Contact Us</b></h2>
                    <p>To contact us for logistics services, please reach out to our team via the following channels: <br />

Phone: +254746179246 <br />
Email: info@globeflight.co.ke <br />
Address: NextGen Mall 3rd floor</p>
                    </div>
                </div>
            </div>
        </div>
        <section className='container my-5'>
            <div className="row">
                <div className="col-md-6 g-2">
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" placeholder="Message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send
                </Button>
                </Form>

                </div>
                <div className="col-md-6 g-2">
                    <img style={{borderRadius:'10px'}} src="https://media.istockphoto.com/id/859526476/photo/plane-trucks-are-flying-towards-the-destination-with-the-brightest.webp?b=1&s=170667a&w=0&k=20&c=0WsWwodB8CwLKqiY59lA5Hems6Ir261LJA93M13U0rU=" alt="" className="img-fluid" />
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default ContactPage