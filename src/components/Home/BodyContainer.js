import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import Venues from '../Venues';
import Details from '../Details/Details';

class BodyContainer extends Component {
  render() {
    const { selectedVenue, marginTop } = this.props;
    return (
      <Container style={{ marginTop }}>
        <Row>
          <Col lg="1" xl="1" className="d-none d-xl-block pl-0 pr-0" />
          <Col sm="12" md="12" lg="7" xl="6" className="pl-0">
            <Venues />
          </Col>
          <Col sm="12" md="12" lg="4" xl="5" className="d-none d-lg-block" style={{ right: '0' }}>
            <Details to={selectedVenue.venue_id} spy smooth offset={-64} duration={500} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedVenue } = state.venue;
  return { selectedVenue };
};

export default connect(mapStateToProps)(BodyContainer);
