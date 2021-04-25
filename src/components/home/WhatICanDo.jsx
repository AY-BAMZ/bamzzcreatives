import React from 'react'
import './Index.css'
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { Row, Col } from 'react-bootstrap';

function whatICanDo() {
    return (
        <div>
            <h2 style={{fontSize: 50, fontWeight: 800, marginTop: 30, marginBottom: 30, color: "#800080"}}>yes we can</h2>
            <div style={{width: 100, margin: 'auto', background: '#000', height: 5, marginBottom: 50}}></div>
            <Row style={{padding: 0, maxWidth: 1000, marginTop: 30, alignItems: 'center', margin: 'auto', }}>
            <Col className='whatCol' md={4}>
            <div className='whatICanDo'>
                <div className="whatIcon">
                    <RateReviewOutlinedIcon  style={{fontSize: 100, color: '800080', marginTop: 30, marginBottom: 30}}/>
                </div>
                <h3>best experience</h3>
                <p style={{margin: 20, color: '#888', fontSize: 12}}>with over 7years of experience in graphics design, and 3years of experience as a product designer, we are more that capable</p>
            </div>
            </Col>
            <Col md={4}>
            <div className='whatICanDo'>
                <div className="whatIcon">
                    <PermPhoneMsgIcon  style={{fontSize: 100, color: '800080', marginTop: 30, marginBottom: 30}} />
                </div>
                <h3>communication skills</h3>
                <p style={{margin: 20, color: '#888', fontSize: 12}}>with over 7years of experience in graphics design, and 3years of experience as a product designer, we are more that capable</p>
            </div>
            </Col>
            <Col md={4}>
            <div className='whatICanDo'>
                <div className="whatIcon">
                    <DoneAllIcon style={{fontSize: 100, color: '800080', marginTop: 30, marginBottom: 30}} />
                </div>
                <h3>100% satisfaction</h3>
                <p style={{margin: 20, color: '#888', fontSize: 12}}>with over 7years of experience in graphics design, and 3years of experience as a product designer, we are more that capable</p>
            </div>
            </Col>
        </Row>
        <button style={{marginTop: 50, fontSize: 20, marginBottom: 50}}>ORDER NOW</button>
        </div>
    )
}

export default whatICanDo
