import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormCreateContact } from 'components/Forms/FormCreateContact';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const INITIAL_STATE = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: [...INITIAL_STATE],
    filter: '',
  };

  createContact = body => {
    const isAlreadyExist = this.state.contacts.find(
      el => el.name.toLowerCase() === body.name.toLowerCase()
    );
    if (isAlreadyExist)
      return alert(`${isAlreadyExist.name} is already in contacts`);
    const newContact = { ...body, id: nanoid() };
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  filterContact = ({ target: { value } }) => {
    this.setState({ filter: value });
    this.setState(prev => ({
      contacts: prev.contacts.filter(el =>
        el.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
      ),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phone book</h1>
        <FormCreateContact createContact={this.createContact} />

        <h2>Contacts</h2>
        <Filter filterContact={this.filterContact} />
        <ContactList array={this.state.contacts} />
      </div>
    );
  }
}
