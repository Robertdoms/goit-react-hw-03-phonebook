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

const Section = styled.section`
  margin: 20px auto;
  padding: 10px;
  text-align: center;
  width: 300px;
  border: 2px solid orange;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & label {
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
  & button {
    max-width: 120px;
    margin-left: auto;
    margin-right: auto;
  }
`;
