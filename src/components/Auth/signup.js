import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from './actions.js';
import './style.css';

class Signup extends Component {
  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handlePassConfirmChange = this.handlePassConfirmChange.bind(this);
    this.state = {
      email: '',
      password:'',
      passConf:''
    };
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePassChange(event) {
    this.setState({ password: event.target.value });
  }

  handlePassConfirmChange(event) {
    this.setState({ passConf: event.target.value });
  }

  handleFormSubmit({email, password}) {
    this.props.signupUser({email,password});
  }

  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Ooops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }
  
  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
    return (
      <div className="signup">
        <form onSubmit={ handleSubmit(this.handleFormSubmit) }>
          <fieldset className="form-group">
            <label>Email:</label>
            <input className="form-control"  {...email} value={this.state.email} onChange={this.handleChange} />
            {email.touched && email.error && <div className="error">{email.error}</div>}
          </fieldset>
          <fieldset className="form-group">
            <label>Hasło:</label>
            <input  type="password" className="form-control" {...password} value={this.state.password} onChange={this.handlePassChange} />
            {password.touched && password.error && <div className="error">{password.error}</div>}
          </fieldset>
          <fieldset className="form-group">
            <label>Potwierdź hasło:</label>
            <input  type="password" className="form-control" {...passwordConfirm} value={this.state.passConf} onChange={this.handlePassConfirmChange} />
            {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
          </fieldset>
          {this.renderAlert()}
          <button action="submit" className="sgn_btn">Załóż konto</button>
        </form>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};
  
  // eslint-disable-next-line
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formProps.email)) { 
    errors.email = 'Nie prawidłowy email';
  }  
 
  if (!formProps.email) {
    errors.email = 'Wprowadź e-mail';
  }

  if (!formProps.password) {
    errors.password = 'Wpisz hasło';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Potwierdź hasło';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Hasła muszą sie zgadzać!';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['email','password','passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);