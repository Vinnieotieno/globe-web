import React from 'react'
import Header from '../components/Header'
import './styles.css'
import { Carousel, ProgressBar } from 'react-bootstrap';
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div style={{overflowX:'hidden'}}>
        <Header/>
        <div>
        <div style={{ height: '75vh', background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://media.istockphoto.com/id/504862904/photo/container-ship-in-the-harbor-in-asia.webp?b=1&s=170667a&w=0&k=20&c=tj6oAB_oR08d57LKGoRnSddoLHJpIhTcuVkeC1IrlA4=)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="row " >
                <div className="col-md-6 text-light " style={{marginTop:'20%'}}>
                    <div className="container">
                    <h2><b>KENYA LEADING <br /> LOGISTIC COMPANY</b></h2>
                    <p>Experience seamless transportation and on-time deliveries with our reliable logistic solutions. Trust our expert team for hassle-free shipping and exceptional service.</p>
                    <div className="d-flex">
                        <div className="btn btn-warning ">Contact Us</div>
                        <div className="btn btn-outline-light mx-5">Discover More</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-5">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div className="row">
                    <div className="col-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-telephone-inbound-fill text-warning" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"/>
                    </svg>
                    </div>
                    <div className="col-9">
                        <h3 className='mb-2'>Call Center</h3>
                        <p>Give us a Free call +254746179246</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
            <div className="row">
            <div className="col-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-calendar-day-fill text-warning" viewBox="0 0 16 16">
            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16v9zm-4.785-6.145a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43c0 .238.192.425.43.425zm.336.563h-.672v4.105h.672V8.418zm-6.867 4.105v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105z"/>
            </svg>
            </div>
            <div className="col-9">
                <h3 className='mb-2'>Working Hours</h3>
                <p>Mon-Sat: 8AM-5PM</p>
            </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
            <div className="row">
            <div className="col-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-geo-alt-fill text-warning" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
            </div>
                <div className="col-9">
                <h3 className='mb-2'>Location</h3>
                <p>NextGen Mall 3rd floor</p>
                </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
            <div className="row">
            <div className="col-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-globe-central-south-asia text-warning" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.882 1.731a.482.482 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.721.721 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a.996.996 0 0 0-.462-.04 7.03 7.03 0 0 1 2.45-2.027Zm-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.78.78 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.454.454 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282a.61.61 0 0 0 .04-.001 7.003 7.003 0 0 1-12.658.905Z"/>
            </svg>
                    </div>
                    <div className="col-9">
                        <h3 className='mb-2'>Global Office</h3>
                        <p>China</p>
                    </div>
            </div>
            </div>
        </div>
        </div>
        {/* services */}
        <div className="row mt-5">
            <div className="col-sm-5 m-auto">
            <div className="mx-5 d-flex ">
            <p className="vertical-line mx-4 text-warning"></p>
            <div>
            <h2 className='mb-2 '>Our Services</h2>
            <p>Efficient logistics solutions tailored to your business needs. Timely deliveries, secure handling, and reliable supply chain management. Experience seamless shipping today!"</p>
            </div>
            </div>
            </div>
        </div>
        <div className="container my-5">
        <div className="row ">
            <div className="col-md-4">
                <img  style={{borderRadius:'8px'}} src="https://media.istockphoto.com/id/95875603/photo/russian-airfreight-plane.webp?b=1&s=170667a&w=0&k=20&c=-XRncFkbUQDH6FmAmlIARDMNimrU_dTD4iYH3JG9whM=" alt="" className="img-fluid" />
                <div className="mt-2">
                    <h4 className="text-center">Air Freight</h4>
                    <p>Fast and efficient air freight services for expedited delivery of your goods. Global coverage, reliable tracking, and dedicated support ensure seamless transport and timely arrival of your shipments.</p>
                </div>
            </div>
            <div className="col-md-4">
                <img style={{borderRadius:'8px'}} src="https://media.istockphoto.com/id/943545810/photo/cargo-ship-sailing-in-ocean-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=1IP1AXHcew-CygX9T9g2jZOVRj0MmtSpvBEn_fhQpro=" alt="" className="img-fluid" />
                <div className="mt-2">
                    <h4 className="text-center">Sea Freight</h4>
                    <p>Our sea freight services provide cost-effective and reliable shipping solutions for your cargo across global waters. Trust our expertise in handling customs, documentation, and seamless transit.</p>
                </div>
            </div>
            <div className="col-md-4">
                <img style={{borderRadius:'8px'}} src="https://media.istockphoto.com/id/1405256591/photo/business-people-shaking-hands-to-congratulate-success-business-executives-handshake-to.webp?b=1&s=170667a&w=0&k=20&c=aOnl3x4jP3Gl_FSCXW06aN2fgBxWAhcOUs4VkPPPuU0=" alt="" className="img-fluid" />
                <div className="mt-2">
                    <h4 className="text-center">Consolidation</h4>
                    <p>Consolidation service combines multiple shipments into one, optimizing efficiency and reducing costs. Enjoy streamlined logistics, improved inventory management, and enhanced shipment coordination for your business.</p>
                </div>
            </div>
        </div>
        </div>
        <div className="my-4 container">
            <div className="row container">
                <div className="col-sm-5">
                <div className="mx-5 d-flex ">
                <p className="vertical-line mx-4 text-warning"></p>
                <div>
                <h6 className='mb-3 text-warning'><b>Our Testimonials</b></h6>
                <h2 className='mb-3 '>What Customers Say About Us</h2>
                <p>Our customers rave about our exceptional service, reliable deliveries, and seamless logistics solutions. Hear what they have to say about our commitment to their success.</p>
                </div>
                </div>
                </div>
                <div className="col-sm-7">
                    <div className="row">
                        <div className="col-6">
                            <div className="card">
                                <div className="card-body">
                                <div className="d-flex justify-content-between mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                                </svg>
                                <img src="https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=" style={{width:'90px', height:'90px', borderRadius:'50%'}} alt="" />
                                </div>
                                <p>I was thoroughly impressed with the logistics service provided. The delivery was prompt, and the goods arrived in perfect condition. Highly recommended!</p>

                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card ">
                                <div className="card-body">
                                <div className="d-flex justify-content-between mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                                </svg>
                                <img src="https://media.istockphoto.com/id/1432226243/photo/happy-young-woman-of-color-smiling-at-the-camera-in-a-studio.webp?b=1&s=170667a&w=0&k=20&c=HnVO0QRDl31Jb7HI7ly-Kepn58TzM_TwYpHMsktn9do=" style={{width:'90px', height:'90px', borderRadius:'50%'}} alt="" />
                                </div>
                                <p>The logistics company exceeded my expectations. Their attention to detail and smooth coordination ensured a seamless shipping experience.</p>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div className="container my-4">
        <div style={{ height: '50vh', background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://media.istockphoto.com/id/1418267688/photo/aerial-top-down-view-of-a-large-container-cargo-ship-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=soM-KJmJf6rKMnZHx7eJnhGYV_3-s5uXtmbTzztPzxI=)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="row">
                <div className="col-7">
                <div style={{ marginTop: '18%' }} className="container text-center">
                <div className="d-flex justify-content-between text-light">
                    <p>REGION MARKETSHARE</p>
                    <p>90%</p>
                </div>
                <ProgressBar className='' variant='warning'  now={90}  />
                <div className="d-flex justify-content-between text-light">
                    <p>REVENUE GROWTH PER YEAR</p>
                    <p>79%</p>
                </div>
                <ProgressBar className='' variant='warning'  now={79} />
                <div className="d-flex justify-content-between text-light">
                    <p>PROFIT GROWTH PER YEAR</p>
                    <p>60%</p>
                </div>
                <ProgressBar className='' variant='warning'  now={60}  />
                <div className="d-flex justify-content-between text-light">
                    <p>NUMBER OF LOGISTIC CENTERS</p>
                    <p>86%</p>
                </div>
                <ProgressBar className='' variant='warning'  now={86}  />
                </div>
                </div>
                <div className="col-5 ">
                <div className="mt-5">
                <div style={{marginTop:'25%'}} className="mx-5 d-flex  text-light ">
                <p className="vertical-line mx-4  text-warning"></p>
                <div>
                <h2 className='mb-2 '>Our Year In Numbers</h2>
                <p>Efficient logistics solutions tailored to your business needs. Timely deliveries, secure handling, and reliable supply chain management. Experience seamless shipping today!"</p>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
        <div className="row mt-5">
            <div className="col-sm-5 m-auto">
            <div className="mx-5 d-flex ">
            <p className="vertical-line mx-4 text-warning"></p>
            <div>
            <h2 className='mb-2 '>Latest Blog & News</h2>
            <p>Check out our latest blog and news updates for insights on industry trends, innovative solutions, and company announcements.</p>
            </div>
            </div>
            </div>
        </div>
        <div className="container my-5">
        <div className="row ">
            <div className="col-md-4">
                <img  style={{borderRadius:'8px', height:'200px'}} src="https://media.istockphoto.com/id/1071599106/photo/double-exposure-businessman-using-digital-tablet-and-cityscape-business-network-and.webp?b=1&s=170667a&w=0&k=20&c=kvFjOV_rYRO45-PwQtjh6nn4n6dj8fJwKwX4o0huLL0=" alt="" className="img-fluid" />
                <div className="mt-2">
                    <h4 className="text-center">Air Freight</h4>
                    <p>Fast and efficient air freight services for expedited delivery of your goods. Global coverage, reliable tracking, and dedicated support ensure seamless transport and timely arrival of your shipments.</p>
                </div>
            </div>
            <div className="col-md-4">
                <img style={{borderRadius:'8px', height:'200px'}} src="https://media.istockphoto.com/id/1328368591/photo/concept-of-car-rental-search-purchase-and-cargo-transportation.webp?b=1&s=170667a&w=0&k=20&c=QKDn-AoCh-UJ6zbiU_m1vM57H3E8pJ0SOYN1tIxmH7o=" alt="" className="img-fluid" />
                <div className="mt-2">
                    <h4 className="text-center">Sea Freight</h4>
                    <p>Our sea freight services provide cost-effective and reliable shipping solutions for your cargo across global waters. Trust our expertise in handling customs, documentation, and seamless transit.</p>
                </div>
            </div>
            <div className="col-md-4">
                <img style={{borderRadius:'8px', height:'200px'}} src="https://media.istockphoto.com/id/1359740834/photo/local-or-global-symbol-turned-wooden-cubes-and-changed-the-word-local-to-global-beautiful.webp?b=1&s=170667a&w=0&k=20&c=H2_Mbtasojgfv2iba_j2pWa7dFHii9mIfakAZVf_iXc=" alt="" className="img-fluid" />
                <div className="mt-2">
                    <h4 className="text-center">Consolidation</h4>
                    <p>Consolidation service combines multiple shipments into one, optimizing efficiency and reducing costs. Enjoy streamlined logistics, improved inventory management, and enhanced shipment coordination for your business.</p>
                </div>
            </div>
        </div>
        <div className="btn btn-warning px-4">View All <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>  </div>
        </div>
        </div>
         {/* Our Clients Section */}
         <div className="container my-5">
          <h2 className="text-center mb-4">Our Clients</h2>
          <Carousel
            controls={false}
            indicators={false}
            interval={2000}
            pause={false}
            className="carousel-clients"
          >
            <Carousel.Item>
              <div className="d-flex justify-content-around align-items-center">
                <img
                  src="https://via.placeholder.com/150x80?text=Client+1"
                  alt="Client 1"
                  className="client-logo"
                />
                <img
                  src="https://via.placeholder.com/150x80?text=Client+2"
                  alt="Client 2"
                  className="client-logo"
                />
                <img
                  src="https://via.placeholder.com/150x80?text=Client+3"
                  alt="Client 3"
                  className="client-logo"
                />
                <img
                  src="https://via.placeholder.com/150x80?text=Client+4"
                  alt="Client 4"
                  className="client-logo"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-around align-items-center">
                <img
                  src="https://via.placeholder.com/150x80?text=Client+5"
                  alt="Client 5"
                  className="client-logo"
                />
                <img
                  src="https://via.placeholder.com/150x80?text=Client+6"
                  alt="Client 6"
                  className="client-logo"
                />
                <img
                  src="https://via.placeholder.com/150x80?text=Client+7"
                  alt="Client 7"
                  className="client-logo"
                />
                <img
                  src="https://via.placeholder.com/150x80?text=Client+8"
                  alt="Client 8"
                  className="client-logo"
                />
              </div>
            </Carousel.Item>
            {/* Add more Carousel.Items as needed */}
          </Carousel>
        </div>
        <Footer/>
    </div>
  )
}

export default HomePage