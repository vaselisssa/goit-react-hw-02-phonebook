import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, AddButton } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  //*генерація унікальних id
  nameInputId = nanoid();
  numberInputId = nanoid();

  //*Обробник зміни значень полів вводу форми
  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  //*Обробник відправки форми
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  //*Очищення полів форми
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} autoComplete="off">
        <Label htmlFor={this.nameInputId}>
          Name:
          <Input
            type="text"
            id={this.nameInputId}
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
        </Label>
        <Label htmlFor={this.numberInputId}>
          Number:
          <Input
            type="tel"
            id={this.numberInputId}
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            required
          />
        </Label>
        <AddButton type="submit">Add contact</AddButton>
      </Form>
    );
  }
}

export default ContactForm;
