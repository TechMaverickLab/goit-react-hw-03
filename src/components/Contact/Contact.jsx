// import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <p className={styles.text}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M18 22.08v-1.65c2.2-1.24 4-4.33 4-7.43 0-4.97 0-9-6-9s-6 4.03-6 9c0 3.1 1.8 6.2 4 7.43v1.65C7.22 22.64 2 25.97 2 30h28c0-4.03-5.22-7.36-12-7.92z"/></svg>
        {name}
        <br />
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.1 12.1 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"/></svg>
        {number}
      </p>
      <button onClick={() => onDeleteContact(id)} className={styles.button}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
