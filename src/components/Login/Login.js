import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { validateUserAction, userAuthAction, forgotPasswordAction } from '../../actions';
import logo from '../../icons/Hero.jpg';
import mobileView from '../../icons/mobile_view.png';
import entaly from '../../icons/Entaly_logo_rev.png';
import './Login.scss';
import LoginEmail from './LoginEmail';
import LoginPassword from './LoginPassword';
import ForgotPassword from './ForgotPassword';

const Backgroundimage = styled.div`
  background-image: url(${logo});
  width: 100%;
  height: 461px;
  background-size: 100%
  background-repeat: no-repeat;
  @media (max-width: 425px){
    background-image: url(${mobileView});
  }
`;

const Dot = styled.div`
  height: 6px;
  width: 6px;
  background-color: ${({ active }) => (active ? '#F79C08' : 'lightgrey')};
  border-radius: 50%;
  margin-right: 6px;
  cursor: pointer;
`;

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleFormState = this.handleFormState.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
    this.handleForgotPasswordSubmit = this.handleForgotPasswordSubmit.bind(this);
    this.state = {
      email: '',
      formStatus: 'email',
    };
  }

  componentDidUpdate(prevProps, { formStatus }) {
    const { user } = this.props;
    if (user !== prevProps.user) {
      if (user.email && formStatus !== 'forgotPassword') {
        this.handleFormState('password');
      }
    }
  }

  handleEmailSubmit(email) {
    this.setState({ email });
    this.props.validateUserAction(email);
  }

  handlePasswordSubmit(password) {
    const { email } = this.state;
    this.props.userAuthAction({ email, password });
  }

  handleForgotPasswordSubmit(email) {
    this.setState({ email });
    this.props.forgotPasswordAction(email);
  }

  handleFormState(formStatus) {
    this.setState({ formStatus });
  }

  formState(formStatus) {
    const { user } = this.props;
    switch (formStatus) {
    case 'password':
      return (
        <LoginPassword
          changeFormState={this.handleFormState}
          Dot={Dot}
          user={user}
          handlePasswordSubmit={this.handlePasswordSubmit}
        />
      );
    case 'forgotPassword':
      return (
        <ForgotPassword
          handleForgotPasswordSubmit={this.handleForgotPasswordSubmit}
          changeFormState={this.handleFormState}
          user={user}
        />
      );
    default:
      return (
        <LoginEmail
          changeFormState={this.handleFormState}
          handleEmailSubmit={this.handleEmailSubmit}
          Dot={Dot}
          user={user}
        />
      );
    }
  }

  render() {
    const { formStatus } = this.state;
    return (
      <div className="full-background">
        <Backgroundimage>
          <div className="product-tagline-container d-block d-md-none"><span className="product-tagline">Entaly, The Digital Enterprise Platform.</span></div>
          {this.formState(formStatus)}
        </Backgroundimage>
        <div className="product-tagline-container">
          <span className="product-tagline d-none d-md-block">Entaly, The Digital Enterprise Platform.</span>
          <img src={entaly} alt="logo" className="product-logo" />
        </div>
        {/* <img src={entaly} alt="logo" className="product-logo d-block d-md-none" /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state.session;
  return { user };
};

export default connect(mapStateToProps, {
  validateUserAction,
  userAuthAction,
  forgotPasswordAction,
})(Login);
