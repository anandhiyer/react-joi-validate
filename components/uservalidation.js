import { React, Component } from 'react'
import { _ }  from 'lodash'

class Input extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }
  getInitialState() {
    // we don't want to validate the input until the user starts typing
    return {
      validationStarted: false
    };
  };

   debounce(func, wait, immediate) {
  	var timeout;
  	return function() {
  		var context = this, args = arguments;
  		var later = function() {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
  		};
  		var callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
  	};
  };

  prepareToValidate(){}
  componentWillMount(){
    var startValidation = function(){
      this.setState({
        validationStarted: true
      })
    }.bind(this);

    // if non-blank value: validate now
    if (this.props.value) {
      startValidation();
    }
    // wait until they start typing, and then stop
    else {
      this.prepareToValidate = this.debounce(startValidation, 1000);
    }
  };


  handleChange(e){
    if (!this.state.validationStarted) {
      this.prepareToValidate();
    }
    this.props.onChange && this.props.onChange(e);
  };


  render(){
    var className = "";
    if (this.state.validationStarted) {
       className = (this.props.valid ? "valid" : "invalid");
    }
    return(  <input
        {...this.props}
        className={className}
        onChange={this.handleChange} />)

  };
};



export default Input
