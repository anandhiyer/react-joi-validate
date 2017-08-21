import React, { Component } from 'react'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import ContactForm from '../components/ContactForm'
import SubmitValidationForm from '../components/SubmitValidationForm'
import Input from '../components/uservalidation'
import Demo from '../components/Demo'
import actions from '../actions/formAction'
import { SubmissionError } from 'redux-form'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = this.getInitialState();

    }
   submit({firstName='',lastName='',email=''}) {
     let error = {};
     let isError = false;

      if(firstName.trim() === '') {
            error.firstName = 'Required';
            isError = true;
      }

      if ( firstName.length > 20 ) {
          error.firstName = 'Too long';
          isError = true;
      }

      if(lastName.trim() === '') {
            error.lastName = 'Required';
            isError = true;
      }

      if(email.trim() === '') {
            error.email = 'Required';
            isError = true;
      }

      if (isError) {
        throw new SubmissionError(error);
      }
  }

  render() {
    let inlineStyle = {color:'blue'}
    var valid = this.validate(this.state);
    return (
        <div className="_app">
          <h1 style={inlineStyle}> Redux Form Submission</h1>
          {/*<ContactForm onSubmit={this.submit} />*/}
          {/*<SubmitValidationForm />*/}
          {/*<div>
            <Input valid={valid.value}
                   className='foobar'
                   value={this.state.value}
                   onChange={this.handleChange}
                   placeholder="something with 'react'"/>
            <Input valid={valid.price}
                  value={this.state.price}
                  onChange={this.handlePriceChange}
                  placeholder="$0.00" />
          </div>
          */}
          <Demo />
        </div>

      )
  }

    getInitialState(){
      return {value: "", price: ""};
    }

    handleChange(e){
      this.setState({
        value: e.target.value
      })
    }

    handlePriceChange(){
      this.setState({
        price: e.target.value
      })
    }

    validate(state){
      return {
        value: state.value.indexOf('react') !== -1,
        price: /^\$\d+\.\d+$/.test(state.price)
      }
    };
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
