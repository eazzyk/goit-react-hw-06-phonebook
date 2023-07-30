// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import Filter from './Filter';
import ContactForm from './ContactForm';
import { useContacts } from 'hooks/useContacts';
import css from './App.module.css';

const App = () => {
  const { contacts } = useContacts();
  // const saveContact = localStorage.getItem('contacts');

  // const parseSaveContact = JSON.parse(saveContact);

  // const [contacts, setContacts] = useState(
  //   parseSaveContact ?? [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ]
  // );

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (name, number) => {
  //   const isExist = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

  //   if (isExist) {
  //     alert(`${number} is already in contacts.`);
  //     return;
  //   }
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   setContacts(prevState => [...prevState, contact]);
  //   alert(`${name}\n${number} \nis added to your contacts!`);
  //   return;
  // };

  // const getFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const listContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  // };

  // const removeContact = ContId => {
  //   setContacts(prevState => prevState.filter(prevState => prevState.id !== ContId));
  // };
  //r
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      {contacts.length >= 1 && <Filter />}
      {contacts.length > 0 ? <ContactList /> : <p>Your phonebook is empty. Please add contact.</p>}
    </div>
  );
};

export default App;
