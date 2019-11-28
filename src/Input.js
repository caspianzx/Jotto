import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className='form-inline'>
        <input
          className='mb-2 mx-sm-3'
          type='text'
          placeholder='enter guess'
          data-test='input-box'
        />
        <button
          className='btn btn-primary mb-2'
          type='submit'
          data-test='submit-button'>
          Submit
        </button>
      </form>
    );

    return <div data-test='component-input'>{contents}</div>;
  }
}

Input.propTypes = {};

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
