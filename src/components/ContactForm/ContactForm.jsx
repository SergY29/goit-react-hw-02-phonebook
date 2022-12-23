import { Component } from 'react';
import { Form, Label, Input } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {};

  render() {
    return (
      <Form>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // onChange={onChange}
            // value={name}
          />
        </Label>
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}
