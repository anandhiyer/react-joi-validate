import React from 'react';
import classnames from 'classnames';
import Joi from 'joi';
import strategy from 'joi-validation-strategy';
import validation from 'react-validation-mixin';

const Demo = React.createClass({
  displayName: 'Demo',
  validatorTypes:  {
    name: Joi.string().min(3).required().label('Name'),
  },
  getValidatorData: function() {
    return this.state;
  },
  getInitialState: function() {
    return {
      name: null
    };
  },
  render: function() {
    return (
      <div>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          ref='name'
          placeholder='Enter Name'
          value={this.state.name}
          onChange={this.onChange('name')}
          onBlur={this.props.handleValidation('name')}
        />
        {this.renderHelpText(this.props.getValidationMessages('name'))}
      </div>
    )
  },
  renderHelpText: function(message) {
    return (
      <span className="help-block">{message}</span>
    );
  },
  onChange: function(field) {
    return event => {
      let state = {};
      state[field] = event.target.value;
      this.setState(state);
    };
  }
});

export default validation(strategy)(Demo);
