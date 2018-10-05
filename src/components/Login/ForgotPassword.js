import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';


class ForgotPassword extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      errorMessage: '',
    };
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

  handleChange(e) {
    this.setState({ email: e.target.value });
  }

  submitEmail(e) {
    if (e) {
      e.preventDefault();
    }
    const { handleForgotPasswordSubmit } = this.props;
    const { email } = this.state;
    const emailValidationRule = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.length === 0) {
      this.setErrorState('Please enter the Email ID');
    } else if ((emailValidationRule).test(email)) {
      handleForgotPasswordSubmit(email);
    } else {
      this.setErrorState('Please enter the correct Email ID');
    }
  }

  render() {
    const { email, errorMessage } = this.state;
    const { user, changeFormState } = this.props;
    const error = ((!!errorMessage) || user.error === 'forgotPassword');
    const hiddenEmail = email.replace(email.substring(0, email.lastIndexOf('@')), '*****');
    return (
      <Form className="login-form-container" onSubmit={e => this.submitEmail(e)}>
        {user.resetRequestSent ? (
          <FormGroup>
            <h3 className="login-heading">Sent !</h3>
            <FormText className="fontSize12">An email with detailed instructions on how to reset your password has been sent to {hiddenEmail}.</FormText>
            <Button onClick={() => changeFormState('email')} className="submit-button">Login Again</Button>
          </FormGroup>
        ) : (
          <FormGroup>
            <div>
              <h3 className="login-heading">Reset Password</h3>
              <FormText className="fontSize12">Enter your Email ID below</FormText>
              {error && (
                <FormText color="danger" className="fontSize12">
                  {errorMessage}
                </FormText>
              )}
            </div>
            <Label className="form-label"><b>Email</b></Label>
            <Input
              className="form-input"
              value={email}
              spellCheck={false}
              autoFocus
              // placeholder="example@example.com"
              onChange={this.handleChange}
              invalid={error}
            />
            <Button type="submit" className="submit-button">Next</Button>
          </FormGroup>
        )}
      </Form>
    );
  }
}
export default ForgotPassword;
