import React from 'react'

import Review from '../../../assets/review.png'
import Compare from '../../../assets/compare.png'

function How() {
    return (
        <>
            <div className="hiw">
            <h1 className="hiw-title">How It Works</h1>
            </div>
        
                <div className='step-container1'>
                    <div className="step-row">
                        <div className='img-box1'></div>
                        <div className="step-box">
                            <h2 className="step-num">STEP 01</h2>
                            <h3 className="step-title">Tell us what you need</h3>
                            <p className="step-info">Whatever the service you're looking for, we'll help you find the best professional for the job.</p>
                        </div>  
                    </div>
                </div>

                <div className='step-container2'>
                    <div className="step-row">
                        <div className="step-box2">
                            <h2 className="step-num">STEP 02</h2>
                            <h3 className="step-title">Let us do the Legwork</h3>
                            <p className="step-info">We’ll search thousands of professionals to find the best ones for what you need.</p>
                        </div>  
                        <div className='img-box2'></div>
                    </div>
                </div>
                        
                <div className='step-container3'>
                    <div className="step-row">
                        <div className='img-box3'>
                            <img className='box3-image' src={Compare} alt="" />
                        </div>
                        <div className="step-box3">
                            <h2 className="step-num">STEP 03</h2>
                            <h3 className="step-title">Compare and Pick the Best</h3>
                            <p className="step-info">Check out their profiles, reviews and portfolio to help you make a decision. From the  Selection, pick the best professional for what you need.</p>
                        </div>  
                    </div>
                </div>

                <div className='step-container4'>
                    <div className="step-row">
                        <div className="step-box4">
                            <h2 className="step-num">STEP 04</h2>
                            <h3 className="step-title">Leave a Review</h3>
                            <p className="step-info">After they’ve done the work, please make sure to leave a review on Polido Services, to help fellow customers find the best professionals.</p>
                        </div>  
                        <div className='img-box4'>
                            <img className='box4-image' src={Review} alt="" />
                        </div>
                    </div>
                </div>


        </>
    )
}

export default How