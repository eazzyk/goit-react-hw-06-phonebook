import ContactList from './ContactList';
import Filter from './Filter';
import ContactForm from './ContactForm';
import { useContacts } from 'hooks/useContacts';
import css from './App.module.css';

const App = () => {
  const { contacts } = useContacts();

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
