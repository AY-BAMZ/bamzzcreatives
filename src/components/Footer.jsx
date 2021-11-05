import React from 'react'
import { Row, Col } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';


function Footer() {
    return (
        <div className='footer'>
            <hr/>
            <Row className="footerRow">
                <Col md={3} className="footerCol">
                    <h3>Categories</h3>
                    <ul>
                        <li>Logo Design</li>
                        <li>UI UX Design</li>
                        <li>Business Branding</li>
                        <li>Packaging Design</li>
                        <li>Website Development</li>
                        <li>Illustration</li>
                        <li>Wordpress Website</li>
                        <li>Stationaries</li>
                    </ul>
                </Col>
                <Col md={3} className="footerCol">
                    <h3>About</h3>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Press & News</li>
                        <li>Careers</li>
                    </ul>
                </Col>
                <Col md={3} className="footerCol">
                    <h3>Support</h3>
                    <ul>
                        <li>Help & Support</li>
                        <li>Trust & Safety</li>
                        <li>Buying on Bamzz Creatives</li>
                        <li>Blog</li>
                        <li>FAQ</li>
                    </ul>
                </Col>
                <Col md={3} className="footerCol">
                    <h3>Subscribe & Social Media</h3>
                    <p>Subscribe to our news teller for regular updates about Us</p>
                    <label>Enter Your Email...</label>
                    <input type="text"/>
                    <button>Subscribe</button>
                    <p>Visit our social media pages</p>
                    <div className="socialMedia">
                    <FacebookIcon className='socialMediaIcons'/>
                    <InstagramIcon className='socialMediaIcons'/>
                    <TwitterIcon className='socialMediaIcons'/>
                    <WhatsAppIcon className='socialMediaIcons'/>
                    <EmailIcon className='socialMediaIcons'/>
                    </div>
                </Col>
            </Row>
            <hr/>
            <div className="copyright">
                <p style={{fontSize: 14, color: '#444'}}>©2021 Bamzz Creatives. All Rights Reserved. Website design & development by BamzzCreatives.com.</p>
            </div>
        </div>
    )
}

export default Footer
