import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './Footer.css';
import colorProfiles from '../../icons/ColorProfiles.svg';

class Footer extends Component {
  render() {
    return (
      <Container fluid className="custom-footer">
        <Row>
          <Col xs={0} sm={4} md={4} lg={4}>
            <div className="hide-xs">
              <a href="/" className="para-custom">Overview</a>
              <i className="fa fa-angle-right next-custom" />
            </div>
          </Col>
          <Col xs={6} sm={4} md={4} lg={4}>
            <img src={colorProfiles} alt="logo" className="color-picker" />
          </Col>
          <Col xs={6} sm={4} md={4} lg={4} className="pull-right text-right">
            <span className="hide-sm footer-copyrights"> &copy; 2018-19 All Rights Reserved,Entaly Inc</span>
            <span className="hide-md-up footer-copyrights"> &copy; </span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
