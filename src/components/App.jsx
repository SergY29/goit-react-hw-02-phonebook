// import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Container } from './App.styled';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson' },
      { id: 'id-2', name: 'Hermione Kline' },
      { id: 'id-3', name: 'Eden Clements' },
      { id: 'id-4', name: 'Annie Copeland' },
    ],
    // filter: '',
    name: '',
    // number: '',
  };

  // loginInputId = nanoid();

  addContact = contact => {
    console.log(contact);
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
