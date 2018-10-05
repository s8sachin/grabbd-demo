import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

const tryIcon = 'http://grabbd.com/img/tryFilledWhite@3x.png';
const likeIcon = 'http://grabbd.com/img/likeFilledWhite@3x.png';
const dislikeIcon = 'http://grabbd.com/img/dislikeFilledWhite@3x.png';
const loveIcon = 'http://grabbd.com/img/loveFilledWhite@3x.png';

class UserCard extends Component {
  render() {
    const { user } = this.props;
    const username = user.user_name.split(' ')[0];
    return (
      <div className="venue-box">
        <Container>
          <Row className="margin-left-right-auto">
            <div className="col-lg-12 text-center p-0 d-flex align-items-center">
              <img className="user-card-img position-relative img-fluid mx-auto" src={`http://d6ejh6ps4xec6.cloudfront.net/780X780/venue/${user.venue_feature_photo}`} alt="abc" />
              <span className="position-absolute w-100 my-auto user-list-name">{user.user_list}</span>
            </div>
          </Row>
          <Row className="user-place-spacing margin-left-right-auto">
            <span className="user-card-places"><b>{username}&apos;s places</b></span>
          </Row>
          <Row className="margin-left-right-auto">
            <Col xs={6}>
              <Row className="user-like-status">
                <img src={loveIcon} className="icon-style Love img-responsive" alt="abc" />
                {user.user_loves}
              </Row>
              <Row className="user-like-status">
                <img src={likeIcon} className="icon-style Like img-responsive" alt="abc" />
                {user.user_likes}
              </Row>
            </Col>
            <Col xs={6}>
              <Row className="user-like-status">
                <img src={tryIcon} className="icon-style Try img-responsive" alt="abc" />
                {user.user_try}
              </Row>
              <Row className="user-like-status">
                <img src={dislikeIcon} className="icon-style Hate img-responsive" alt="abc" />
                {user.user_hates}
              </Row>
            </Col>
          </Row>
        </Container>
        <hr className="horizontal-separator" />
      </div>
    );
  }
}

export default UserCard;
