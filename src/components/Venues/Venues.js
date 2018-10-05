import React, { Component } from 'react';
import { connect } from 'react-redux';
import Venue from './Venue';
import { venueSelectedAction } from '../../actions';
import './venue.scss';
import UserCard from './UserCard';

class Venues extends Component {
  selectVenue(venue) {
    this.props.venueSelectedAction(venue);
  }

  render() {
    const { venuesData, user } = this.props;
    return (
      <div>
        <div>
          {user && <UserCard user={user} />}
        </div>
        {
          venuesData && venuesData.map(venue => (
            <div name={venue.venue_id} key={venue.venue_id} className="cursor-pointer" role="presentation" onClick={() => this.selectVenue(venue)}>
              <Venue venue={venue} user={user} />
            </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { venuesData, user } = state.venue;
  return { venuesData, user };
};

export default connect(mapStateToProps, { venueSelectedAction })(Venues);
