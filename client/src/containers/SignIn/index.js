import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Form, Segment, Button } from 'semantic-ui-react';
import { email, required } from 'redux-form-validators';
import axios from 'axios';
import { AUTH_USER } from '../../actions/types';

class SignIn extends Component {

  onSubmit = async (formValues, dispatch) => {
    try {
      const { data } = await axios.post('/api/auth/signin', formValues);
      localStorage.setItem('token', data.token);
      dispatch({ type: AUTH_USER, payload: data.token });
      this.props.history.push('/profile');
    } catch (e) {
      throw new SubmissionError({
        email: 'Please try again',
        password: 'You entered a bad password',
        _error: 'Login Failed'
      });
    }
  }

  renderEmail = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        error={meta.touched && meta.error}
        autoComplete='off'
        placeholder='Email Address'
      />
    );
  }
  renderPassword = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        error={meta.touched && meta.error}
        type='password'
        placeholder='Password'
        autoComplete='off'
      />
    );
  }
  render() {
    const { invalid, submitting, submitFailed, handleSubmit } = this.props;
    return (

      <div>

        <Navbar />

        <div className="card">

        <div className="cardTitle">
            Sign In
          </div>

          <div className="formBox">
            <Form onSubmit={handleSubmit(this.onSubmit)}>
              <Segment stacked>
                <Field
                  name='email'
                  component={this.renderEmail}
                  validate={
                    [
                      required({ msg: 'Email is required' }),
                      email({ msg: 'You must provide a valid email address' })
                    ]
                  }
                />
                <Field
                  name='password'
                  component={this.renderPassword}
                  validate={
                    [
                      required({ msg: 'You must provide a password' })
                    ]
                  }
                />
                <Button
                  className="signBtn"
                  content='Sign In'
                  type='submit'
                  disabled={invalid || submitting || submitFailed}
                />
              </Segment>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default reduxForm({ form: 'signin' })(SignIn);
