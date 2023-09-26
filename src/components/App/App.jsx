import React, { Component } from 'react';
import { nanoid } from 'nanoid';
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

  //* додавання нового контакту
  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  //* видалення контакту
  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <Title children="Phonebook" />
        <ContactForm onSubmit={this.addContact} />
        <SubTitle children="Contacts" />

        {contacts.length > 0 ? (
          //* Фільтр рендеримо тільки, якщо масив контактів не порожній
          <Filter />
        ) : (
          <EmptyContactListText children="There are no contacts." />
        )}

        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}
