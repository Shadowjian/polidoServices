import React from 'react'

import Laundry from '../../../assets/laundry.jpg'
import Home from '../../../assets/home.jpg'
import Repair from '../../../assets/repair.jpg'
import Transport from '../../../assets/transport.jpg'


function Services() {
    return (
      <>
    <div className="svc-container">

        <div className="svc-header">
            <h1 className="svc-title">Discover Services We Offer</h1>
            <p className="description">Hire professionals from a trustworthy, leading services marketplace company. We are here to serve your every services requirement. Here are some of the services that we are offering.</p>
        </div>

        <div className="svc-cards">
            <div className="card-row">

                <div className="card">
                  <img className='svc-images' src={Laundry} alt="" />
                    <div className="card-body">
                      <h5 className="card-title">Laundry Services</h5>
                      <p className="card-text">Our full laundry services are offered by Retail professional garment care, Garment repair services and Cleaning services companies that caters to individual and institutions.</p>
                      {/* <a href='#'>
                      <button className="btn">View Details</button>
                      </a> */}
                    </div>
                </div>

                <div className="card">
                  <img className='svc-images' src={Home} alt="" />
                    <div className="card-body">
                      <h5 className="card-title">Home Maintainance</h5>
                      <p className="card-text">We’ll help you find House & Home professionals. Tell us your requirements and we’ll refine and contact service providers in your area to help you.</p>
                      {/* <a href='#'>
                      <button className="btn">View Details</button>
                      </a> */}
                    </div>
                </div>

                <div className="card">
                  <img className='svc-images' src={Repair} alt="" />
                    <div className="card-body">
                      <h5 className="card-title">Repair Services</h5>
                      <p className="card-text">Our experienced, professional repair and improvement technicians are highly skilled craftsmen with wide variety of repair and installation services</p>
                      {/* <a href='#'>
                      <button className="btn">View Details</button>
                      </a> */}
                    </div>
                </div>

                <div className="card">
                  <img className='svc-images' src={Transport} alt="" />
                    <div className="card-body">
                      <h5 className="card-title">Transport Services</h5>
                      <p className="card-text">Our professionals are highly screened, trained, and qualified drivers of commercial vehicles for affordable and trustworthy service according to our high-quality standards</p>
                      {/* <a href='#'>
                      <button className="btn">View Details</button>
                      </a> */}
                    </div>
                </div>

            </div>
        </div>

    </div>
    
      </>
    )
  }

export default Services