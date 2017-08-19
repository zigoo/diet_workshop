import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from './actions.js';
import './style.css';

class Signin extends Component {
  constructor(){
    super();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.state = {
      email: '',
      password:''
    };
  }

  handleFormSubmit({email, password}) {
    this.props.signinUser({email,password});
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePassChange(event) {
    this.setState({ password: event.target.value });
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

    const { handleSubmit, fields: { email, password }} = this.props;
    return (
      <div className="signin">
        <form onSubmit={ handleSubmit(this.handleFormSubmit) }>
          <fieldset className="form-group">
            <label>Email:</label>
            <input {...email} className="form-control" value={this.state.email} onChange={this.handleChange} />
          </fieldset>
          <fieldset className="form-group">
            <label>Hasło:</label>
            <input {...password} type="password" className="form-control" value={this.state.password} onChange={this.handlePassChange} />
          </fieldset>
          {this.renderAlert()}
          <button action="submit" className="sgn_btn">Zaloguj</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);