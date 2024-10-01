import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <div>
        <Header/>
        <div>
        <div style={{ height: '75vh', background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://media.istockphoto.com/id/1412694879/photo/smart-logistics-global-business-and-warehouse-technology-management-system-concept.webp?b=1&s=170667a&w=0&k=20&c=Xl2d4eomAcsJL0RlFQpvhzFMYOK50cuq4XenNmBbnPU=)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="row " >
                <div className="col-md-6 text-light " style={{marginTop:'20%'}}>
                    <div className="container">
                    <h2><b>About Us</b></h2>
                    <p>As a leading logistics company, we are dedicated to providing reliable and efficient transportation solutions. With a focus on customer satisfaction, we offer seamless logistics services, tailored to meet your specific needs. Our experienced team and advanced technology ensure smooth operations and timely deliveries. Trust us for all your logistics requirements and experience excellence in every shipment.</p>
                    </div>
                </div>
            </div>
        </div>
        <section className='mt-5'>
            <div className="row">
                <div className="col-md-7 m-auto">
                    <h3 className="text-center text-warning">About Us</h3>
                    <p>At our logistic company, we pride ourselves on being a trusted partner in the transportation and supply chain industry. With years of experience, we offer a wide range of comprehensive logistics solutions to meet the diverse needs of our clients. Our dedicated team of professionals works tirelessly to ensure seamless operations, efficient processes, and timely deliveries. We leverage advanced technology and industry best practices to optimize supply chain management, reduce costs, and enhance customer satisfaction. Trust us to handle your logistics needs and experience a reliable and customer-centric approach that drives your business forward.</p>
                </div>
            </div>
        </section>
        <section>
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
        <div className="row ">
            <div className="col-md-4">
                <img  style={{borderRadius:'8px'}} src="https://media.istockphoto.com/id/1220068378/photo/made-in-china-cardboard-boxes-with-text-made-in-china-and-chinese-flag-on-the-roller-conveyor.webp?b=1&s=170667a&w=0&k=20&c=6fkq2hlLY6so0x6wfs7y7PPkGuF16SaoOKyc4L2lae4=" alt="" className="img-fluid" />
                <div className="mt-2">
                    <h4 className="text-center">Custom Clearance</h4>
                    <p>Our logistic company offers comprehensive custom clearance services to streamline international shipments. We handle all necessary documentation, regulations, and procedures, ensuring smooth customs clearance for your goods. Trust us to navigate complex customs requirements and expedite the clearance process, saving you time and hassle.</p>
                </div>
            </div>
            <div className="col-md-4">
                <img style={{borderRadius:'8px'}} src="https://media.istockphoto.com/id/874515358/photo/manual-workers-working-in-warehouse.webp?b=1&s=170667a&w=0&k=20&c=LrSCwuy5u4Oxm8pw9qI47Ecwfam4qIlRwK72VT-o8jk=" alt="" className="img-fluid" />
                <div className="mt-2">
                    <h4 className="text-center">WareHousing</h4>
                    <p>Our logistics company offers comprehensive warehousing solutions to meet your storage and distribution needs. With state-of-the-art facilities, advanced inventory management systems, and skilled personnel, we ensure secure storage, efficient order fulfillment, and seamless inventory control. Trust us for reliable and cost-effective warehousing services that optimize your supply chain and enhance your business operations.</p>
                </div>
            </div>
            <div className="col-md-4">
                <img style={{borderRadius:'8px'}} src="https://media.istockphoto.com/id/1266958681/photo/global-business-logistics-import-export-background-and-container-cargo-freight-ship-transport.webp?b=1&s=170667a&w=0&k=20&c=Lyz_UM0ZVDeNJb3EmvnmDz7cw30DN9bIB1FyoU8kg8c=" alt="" className="img-fluid" />
                <div className="mt-2">
                    <h4 className="text-center">Distribution</h4>
                    <p>Our distribution services encompass the seamless management of your products from the point of origin to the final destination. With our extensive network, advanced tracking systems, and reliable partners, we ensure efficient and timely distribution of goods. Whether it's warehousing, inventory management, or last-mile delivery, our comprehensive distribution solutions guarantee optimal supply chain performance and customer satisfaction. Trust us to handle your distribution needs and streamline your logistics operations.






</p>
                </div>
            </div>
        </div>
        </div>
        </section>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutPage