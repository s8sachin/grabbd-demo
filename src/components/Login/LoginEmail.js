import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';

class LoginEmail extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      errorMessage: null,
    };
  }

  componentDidMount() {
    const { user } = this.props;
    if (user.email) {
      this.setState({ email: user.email });
    }
  }

  componentDidUpdate(prevProps) {
    const { user } = this.props;
    if (user !== prevProps.user && user.message) {
      this.setErrorState(user.message);
    }
  }

  setErrorState(errorMessage) {
    this.setState({ errorMessage });
  }

  submitEmail(e) {
    if (e) {
      e.preventDefault();
    }
    const { handleEmailSubmit } = this.props;
    const { email } = this.state;
    const emailValidationRule = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.trim() === '') {
      this.setErrorState('Please enter the email id');
    } else if ((emailValidationRule).test(email)) {
      handleEmailSubmit(email);
    } else {
      this.setErrorState('Please enter the correct email id');
    }
  }

  handleChange(e) {
    this.setState({ email: e.target.value });
  }

  render() {
    const { email, errorMessage } = this.state;
    const { Dot, user } = this.props;
    const error = ((!!errorMessage) || user.error === 'email');
    return (
      <Form className="login-form-container" id="loginFormEmail" onSubmit={e => this.submitEmail(e)}>
        <FormGroup>
          <h3 className="login-heading"><b>Sign in to your Company&apos;s workspace</b></h3>
          <FormText color={error ? 'danger' : null} className="fontSize12">
            {error ? errorMessage : 'Enter your Email ID below'}
          </FormText>
          <Label className="form-label"><b>Email</b></Label>
          <Input
            className="form-input"
            value={email}
            spellCheck={false}
            autoFocus
            placeholder="john@entaly.com"
            onChange={this.handleChange}
            invalid={error}
          />
          <Button onClick={() => this.submitEmail()} className="submit-button">Next</Button>
        </FormGroup>
        <div className="dots-holder"><Dot active /><Dot onClick={() => this.submitEmail()} /></div>
      </Form>
    );
  }
}

export default LoginEmail;
