import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

const alt = 'http://d6ejh6ps4xec6.cloudfront.net/780X780/venue/Goav1E9i5vpHaMKpkatyfxBlXDSDMt7gcUFjVLYhfFhisaL3HWrZiQogaysO5a9RUIsdKqPt2tVMoxZtA8oTkZHUImesMbeVcYipm7ykWVgoOfeIwSm7XVuS5u9LIaoS.jpg';
const tryIcon = 'http://grabbd.com/img/tryFilledWhite@3x.png';
const likeIcon = 'http://grabbd.com/img/likeFilledWhite@3x.png';
const dislikeIcon = 'http://grabbd.com/img/dislikeFilledWhite@3x.png';
const loveIcon = 'http://grabbd.com/img/loveFilledWhite@3x.png';

const getLikeStatusText = (username, likeStatus) => {
  switch (likeStatus) {
  case 'Like':
    return `${username} likes this place`;
  case 'Hate':
    return `${username} disliked this place`;
  case 'Love':
    return `${username} loves this place`;
  default:
    return `${username} wants to try this place`;
  }
};

class Venue extends Component {
  render() {
    const { venue, user } = this.props;
    const username = user.user_name.split(' ')[0];
    const likeStatus = venue.venue_friend_grabbd_state;
    const iconUrl = likeStatus === 'Like' ? likeIcon : (likeStatus === 'Hate' ? dislikeIcon : (likeStatus === 'Love' ? loveIcon : tryIcon));
    return (
      <div className="venue-box">
        <Container>
          <Row className="margin-left-right-auto">
            <div>
              <img className="side-imgs" style={{ marginBottom: '5pt' }} src={`http://d6ejh6ps4xec6.cloudfront.net/780X780/venue/${venue.venue_photo_arr[1]}`} alt="abc" />
              <img className="side-imgs" style={{ marginTop: '5pt' }} src={`http://d6ejh6ps4xec6.cloudfront.net/780X780/venue/${venue.venue_photo_arr[2]}`} alt="abc" />
              {/* <div className="main-img"> */}
              <img className="main-img" src={`http://d6ejh6ps4xec6.cloudfront.net/780X780/venue/${venue.venue_photo_arr[0]}`} alt="abc" />
              {/* <img className="category-icon" src={`http://d6ejh6ps4xec6.cloudfront.net/780X780/category/${venue.venue_category_icon}`} alt="abc" /> */}
              {/* </div> */}
            </div>
          </Row>
          <Row className="margin-left-right-auto">
            <span className="venue-name"><b>{venue.venue_name}</b></span>
          </Row>
          <Row className="margin-left-right-auto">
            <div>
              <span className="venue-category">{venue.venue_category}</span><br />
              <span className="venue-address">{venue.venue_address}</span><br />
              <span className="venue-address">{venue.venue_city}, {venue.venue_country}</span>
            </div>
          </Row>
          <Row className="margin-left-right-auto">
            <div style={{ marginTop: '20px', marginBottom: '10px' }}>
              <img src={iconUrl} className={`icon-style ${likeStatus} img-responsive`} alt="abc" />
              <b>{getLikeStatusText(username, likeStatus)}</b>
            </div>
          </Row>
          {venue.venue_featured_comment && (
            <Row className="margin-left-right-auto">
              <div className="venue-comment-holder">
                <span className="venue-ft-comment-user">{venue.venue_featured_comment_user} said:</span><br />
                <span className="venue-ft-comment">{venue.venue_featured_comment}</span><br />
              </div>
            </Row>
          )}
        </Container>
        <hr className="horizontal-separator" />
      </div>
    );
  }
}

export default Venue;
