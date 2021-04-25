import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './Index.css'
import Loading from './Loading';

function WelcomeSection() {
    return (
        <div className='welcome'>
            <Row className="welcomeRow">
                <Col md={6} className="welcomeCol">
                <h1 style={{fontSize: 80,fontWeight: '800', color: '#800080'}}>we will get it done !!! &#128526;</h1>
                <h6 >Which of our services do you need??? and you are a step away from getting it</h6>
                <div className="keywords">
                    <button>Logo</button>
                    <button>UI / UX</button>
                    <button>Branding</button>
                    <button>Flyer</button>
                    <button>Packaging</button>
                    <button>Infographics</button>
                    <button>Illustration</button>
                    <button>Others</button>
                </div>
                <div className="searchForm">
                    <input placeholder='Enter your want...' type="text"/>
                    <button>Search</button>
                </div>
                </Col>
                <Col md={6} className="welcomeCol">
                    <Loading />
                </Col>
            </Row>
        </div>
    )
}

export default WelcomeSection
