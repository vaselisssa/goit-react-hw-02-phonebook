import React from 'react';
import { Form, Label, Input, AddButton } from './ContactForm.styled';

const ContactForm = () => {
  return (
    <Form>
      <Label>
        Name: <Input type="text" name="name" required />
      </Label>
      <Label>
        Number: <Input type="tel" name="number" required />
      </Label>
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
};

export default ContactForm;
