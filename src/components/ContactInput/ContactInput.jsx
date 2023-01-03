import PropTypes from 'prop-types';
import { Component } from 'react';
import styled from '@emotion/styled';

class ContactInputSection extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
}
ContactInputSection.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactInputSection;
