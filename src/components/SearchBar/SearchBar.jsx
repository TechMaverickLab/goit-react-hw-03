// import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = ({ value, onChange, onReset }) => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.label}>Find contacts by name</div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={styles.input}
        />
        {value && (
          <button onClick={onReset} className={styles.resetButton}>Clear</button>
        )}
      </div>
    </div>
  );
};

SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
  };

export default SearchBar;
