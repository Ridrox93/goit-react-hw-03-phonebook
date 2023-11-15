import css from './ContactList.module.css';

export const ContactList = ({filteredContacts, handleDeleteContact}) => {
  return (
    <>
      <h2 className={css.name}>Contacts</h2>
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <li className={css.item} key={contact.id}>
            {contact.name} {contact.number}
            <button
              className={css.deleteButton}
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
