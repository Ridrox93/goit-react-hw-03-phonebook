import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {

    state = {
      name: '',
      number: '',
    };
  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    if (name && number) {
      this.props.onContactFormSubmit?.(name, number);
    }
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label htmlFor="1">Name</label>
        <input
          className={css.input}
          type="text"
          name="name"
          id="1"
          value={name}
          onChange={this.handleInputChange}
          required
        />

        <label htmlFor="2">Number</label>
        <input
          className={css.input}
          type="tel"
          name="number"
          id="2"
          value={number}
          placeholder="555-555-5555"
          pattern="\d{3}-\d{3}-\d{4}"
          onChange={this.handleInputChange}
          required
          title="Please enter a phone number in the format: 555-555-5555"
        />

        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
