import React from 'react';
import {
  Contacts,
  ContactItem,
  Text,
  DeleteButton,
} from './ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Text>
            {name}: {number}
          </Text>
          <DeleteButton type="button" children="Delete" />
        </ContactItem>
      ))}
    </Contacts>
  );
};

export default ContactList;
