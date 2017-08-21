import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({type, label, input,meta: {touched, error } }) => (
    <div className="input-row">
      <label>{label}</label>
            <br/>
      <input {...input} type={type}/>
      {touched && error &&
       <span className="error">{error}</span>}
    </div>
  );

let ContactFormFunc = ({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
          <Field name="firstName" label='firstName' component={renderField} type="text"/>
          <Field name="lastName" label='lastName' component={renderField} type="text"/>
          <Field name="email" label='email' component={renderField} type="email"/>
        <button type="submit">Submit</button>
      </form>
    );

// Decorate the form component
const ContactForm = reduxForm({
  form: 'contact' // a unique name for this form
})(ContactFormFunc);

export default ContactForm;
