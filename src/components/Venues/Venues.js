import React, { Component } from 'react';
import { connect } from 'react-redux';
import WayPoint from 'react-waypoint';
import Venue from './Venue';
import { venueSelectedAction, getVenuesListAction } from '../../actions';
import './venue.scss';
import UserCard from './UserCard';

class Venues extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loadMoreItems() {
    const { venuesPagination } = this.props;
    this.props.getVenuesListAction({
      from: (venuesPagination.from + 5),
      to: (venuesPagination.to + 5),
    });
  }

  selectVenue(venue) {
    this.props.venueSelectedAction(venue);
  }

  renderWaypoint() {
    // if (!this.state.isLoading) {
    return (
      <WayPoint
        onEnter={() => this.loadMoreItems()}
        threshold={2.0}
        topOffset="-500px"
        bottomOffset="-500px"
      />
    );
    // }
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
        {this.renderWaypoint()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { venuesData, user, venuesPagination } = state.venue;
  return { venuesData, user, venuesPagination };
};

export default connect(mapStateToProps, { venueSelectedAction, getVenuesListAction })(Venues);
