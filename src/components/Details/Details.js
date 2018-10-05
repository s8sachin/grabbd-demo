import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card, CardImg, CardBody, CardTitle, CardText,
} from 'reactstrap';
import './Details.scss';
import { ScrollLink } from 'react-scroll';

const tryIcon = 'http://grabbd.com/img/tryFilledWhite@3x.png';
const likeIcon = 'http://grabbd.com/img/likeFilledWhite@3x.png';
const dislikeIcon = 'http://grabbd.com/img/dislikeFilledWhite@3x.png';
const loveIcon = 'http://grabbd.com/img/loveFilledWhite@3x.png';

const getIconUrl = likeStatus => (likeStatus === 'Like' ? likeIcon : (likeStatus === 'Hate' ? dislikeIcon : (likeStatus === 'Love' ? loveIcon : tryIcon)));

class Details extends Component {
  render() {
    const {
      selectedVenue, to, spy, smooth, offset, duration, onClick,
    } = this.props;
    const venueFriends = selectedVenue.venue_friends;
    return (
      <div className="position-fixed" role="presentation" to={to} spy={spy} offset={offset} duration={duration} smooth={smooth} onClick={onClick}>
        <Card className="details-card cursor-pointer">
          <CardImg top width="100%" src={selectedVenue.venue_photo} alt="Card image cap" className="selected-img" />
          <CardBody>
            <CardTitle>{selectedVenue.venue_name}</CardTitle>
            <CardText>
              <small className="text-muted">{selectedVenue.venue_city}</small><br />
              <small className="text-muted">{selectedVenue.venue_miles} Miles</small>
            </CardText>
            <CardText>
              {venueFriends && venueFriends.map(friend => (
                <span key={friend.friend_id}>
                  <img className="user-profile-pic rounded-circle user-like-status" src={`http://d6ejh6ps4xec6.cloudfront.net/780X780/user/${friend.friend_profile_pic}`} alt="abc" />
                  <span> {friend.friend_name} </span>
                  <img src={getIconUrl(friend.friend_state)} className={`icon-style ${friend.friend_state} img-responsive`} alt="abc" title={friend.friend_state} /><br />
                </span>
              ))
              }
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedVenue } = state.venue;
  return { selectedVenue };
};

export default ScrollLink(connect(mapStateToProps)(Details));
