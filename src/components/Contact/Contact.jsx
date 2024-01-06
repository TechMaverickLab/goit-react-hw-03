// import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <p className={styles.text}>{name}: {number}</p>
      <button onClick={() => onDeleteContact(id)} className={styles.button}>Delete</button>
    </li>
  );
};

export default Contact;
