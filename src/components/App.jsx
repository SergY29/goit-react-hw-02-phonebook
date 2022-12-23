import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Container } from './App.styled';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // filter: '',
  };

  addContact = newPhoneNumber => {
    const { name, number } = newPhoneNumber;
    console.log(newPhoneNumber);

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmitCont={this.addContact} />
        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList contacts={contacts} />
      </Container>
    );
  }
}
