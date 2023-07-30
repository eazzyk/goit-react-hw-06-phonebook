import { useContacts } from 'hooks/useContacts';
import css from './ContactList.module.css';
// import PropTypes from 'prop-types';

const ContactList = () => {
  const { filteredContacts, removeContact } = useContacts();

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.contactDeleteBtn}
            type="button"
            onClick={() => removeContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onRemoveContact: PropTypes.func.isRequired,
// };

export default ContactList;
