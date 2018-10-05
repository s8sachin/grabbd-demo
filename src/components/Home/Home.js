import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import BodyContainer from './BodyContainer';
import './Home.scss';
import Header from '../Header/Header';
import { getVenuesListAction } from '../../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollVal: 140
    }
  }
  componentDidMount() {
    this.props.getVenuesListAction();
    window.addEventListener('scroll', e => this.fireOnScroll(e), true);
  }

  fireOnScroll(e) {
    let scrollVal = window.pageYOffset || document.documentElement.scrollTop;
    const scrollable = 140 - scrollVal;
    scrollVal = (scrollable < 64) ? 64 : ((scrollable > 140) ? 14.0 : scrollable);
    this.setState({ scrollVal });
  }

  render() {
    const { selectedVenue } = this.props;
    const { scrollVal } = this.state;
    return (
      <div>
        <Header height={scrollVal} />
        <BodyContainer marginTop={scrollVal} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedVenue } = state.venue;
  return { selectedVenue };
};

export default connect(mapStateToProps, { getVenuesListAction })(Home);
