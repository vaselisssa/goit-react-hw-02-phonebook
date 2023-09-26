import React, { Component } from 'react';
import { Container, Title, SubTitle, EmptyContactListText } from './App.styled';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
        <SubTitle>Contacts</SubTitle>
        <EmptyContactListText children="There are no contacts." />
        <Filter />
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}
