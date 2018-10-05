import React, { Component } from 'react';
import {
  Navbar, Nav, NavItem, NavbarBrand, Button, Col, Row,
} from 'reactstrap';
import { connect } from 'react-redux';
import './Header.scss';
import grabbdLogo from '../../icons/grabbd.png';

class Header extends Component {
  render() {
    const { height, user } = this.props;
    return (
      <div>
        {user && (
          <Navbar color="white" light fixed="top" className="header-navbar container" style={{ height }}>
            <Col lg="1" xl="1" className="d-none d-xl-block pl-0 pr-0" />
            <Col xs="12" sm="12" md="8" lg="7" xl="6" className="pl-0">
              <Row>
                <Col sm="2" xs="2">
                  <img src={grabbdLogo} alt="abc" className="img-responsive logo" />
                </Col>
                <Col sm="1" xs="1">
                  <img src={`http://d6ejh6ps4xec6.cloudfront.net/780X780/user/${user.user_profile_pic}`} alt="abc" className="img-responsive user-profile-pic rounded-circle" />
                </Col>
                <Col xs="1" className="d.block d-sm-none" />
                <Col sm="9" xs="5">
                  <span className="list-curated">List Curated By </span><br />
                  <span className="header-username"><b>{user.user_name}</b></span>
                </Col>
              </Row>
            </Col>
            <Col sm="12" md="12" lg="5" xl="5" className="d-none d-lg-block">
              <Row>
                <Col sm="10" md="10" lg="8">
                  <Button color="light" className="create-list">Create your own list</Button>
                </Col>
                <Col sm="2" md="2" className="pl-0 pr-0">
                  <Button color="light" className="share">Share</Button>
                </Col>
              </Row>
            </Col>
          </Navbar>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state.venue;
  return { user };
};

export default connect(mapStateToProps)(Header);
