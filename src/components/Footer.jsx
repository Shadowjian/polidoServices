import React from 'react'
import styled from 'styled-components'


const FooterWrapper = styled.div`
  	background: var(--bg-color);
    padding: 30px 0;
`

const FooterSection = styled.section`
  	max-width: 1170px;
	  margin:auto;
    box-sizing: border-box;
    .row{
	display: flex;
	flex-wrap: wrap;
}

ul{
	list-style: none;
}

.footer-col{
   width: 25%;
   padding: 0 15px;
}

.footer-col h4{
	font-size: 18px;
	color: var(--link-color);
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 700;
	position: relative;
}

.footer-col h4::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: var(--color-text5);
	height: 2px;
	box-sizing: border-box;
	width: 50px;
}

.footer-col ul li:not(:last-child){
	margin-bottom: 10px;
}

.footer-col ul li a{
	font-size: 16px;
	text-transform: capitalize;
	color: #ffffff;
	text-decoration: none;
	font-weight: 700;
	color: #bbbbbb;
	display: block;
	transition: all 0.3s ease;
}

.footer-col ul li a:hover{
	color: var(--link-color);
	padding-left: 8px;
}

.footer-col .social-links a {
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #ffffff;
	transition: all 0.5s ease;
}

.footer-col .social-links a:hover{
	color: #24262b;
	background-color: var(--link-color);
}

.polido-info {
    color: #bbbbbb;
    font-size: 15px;
}

.polido-info:hover {
    color: var(--link-color);
}


/*responsive*/

@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
}
}
`

function Footer() {
  return (
  <FooterWrapper>
    <FooterSection>
    <div className="row">
  	 		<div className="footer-col">
  	 			<h4>POLIDO SERVICES</h4>
  	 			<ul>
                    <h5 className="polido-info">Your PROBLEM We SOLVE</h5>
                    <h5 className="polido-info">Copyright © 2022 Polido Services</h5>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>ABOUT US</h4>
  	 			<ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Our services</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Join us now</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>GET HELP</h4>
  	 			<ul>
                    <li><a href="#">How It Works</a></li>
                    <li><a href="#">Frequently Asked Questions</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>CONTACT US</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
                    
                    <h3 className="polido-info">support@polidoservices.com</h3>
                    <h3 className="polido-info">+63 (945) 773 0024</h3>
                    
  	 			</div>
  	 		</div>
  	 	</div>

    </FooterSection>
  </FooterWrapper>    
  )
}

export default Footer