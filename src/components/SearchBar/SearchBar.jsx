// import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </label>
  );
};

export default SearchBar;
