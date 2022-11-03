import React from 'react';
import ContactListItem from 'components/ContactListItem/ContactListItem'
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const value = useSelector(getFilteredContacts);

  const filtersContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(value)
    );
  };

  const contactSearch = value === '' ? contacts : filtersContacts();

  return (
    <div className={styles.contacts}>
      {contactSearch.map(({ id, number, name }) => {
        return <ContactListItem key={id} id={id} name={name} number={number} />;
      })}
    </div>
  );
};

ContactList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default ContactList;