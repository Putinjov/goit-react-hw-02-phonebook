import React, { Component } from 'react';
import '../index.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const { contacts } = this.state;
    const existingContact = contacts.find(
      c => c.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (existingContact) {
      alert('This contact already exists!');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className='contacts'>
        <h1>Phone Book</h1>
        <ContactForm addContact={this.addContact} />
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <h2>Contacts</h2>
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
};