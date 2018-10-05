import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';


class Loginpassword extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      password: '',
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

  submitPassword(e) {
    e.preventDefault();
    const { handlePasswordSubmit } = this.props;
    const { password } = this.state;
    if (password.length === 0) {
      this.setErrorState('Please enter the password');
    } else {
      handlePasswordSubmit(password);
    }
  }

  handleChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    const { password, errorMessage } = this.state;
    const { changeFormState, Dot, user } = this.props;
    const error = ((!!errorMessage) || user.error === 'password');
    return (
      <Form className="login-form-container" onSubmit={e => this.submitPassword(e)}>
        <FormGroup>
          <div>
            <h3 className="login-heading">
              Sign in to your Company&apos;s workspace
            </h3>
            <FormText color={error ? 'danger' : null} className="fontSize12">
              {error ? errorMessage : 'Enter your Password below'}
            </FormText>
          </div>
          <Label className="form-label"><b>Password</b></Label>
          <Input
            className="form-input"
            type="password"
            value={password}
            // placeholder="* * * * * * * *"
            autoFocus
            onChange={this.handleChange}
            invalid={error}
          />
          <div
            className="forgotpassword cursor-pointer"
            role="presentation"
            onKeyPress={() => changeFormState('forgotPassword')}
            onClick={() => changeFormState('forgotPassword')}
          >
            Forgot Password?
          </div>
          <Button type="submit" className="submit-button">Submit</Button>
        </FormGroup>
        <div className="dots-holder"><Dot onClick={() => changeFormState('email')} /><Dot active /></div>
      </Form>

    );
  }
}
export default Loginpassword;
