import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { getFilteredContacts } from 'redux/selectors';
import { changeFilter } from 'redux/slice';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts.filter);

  const inputChange = event => {
    const changeValue = event.target.value;
    dispatch(changeFilter(changeValue));
  };

  return (
    <div className={styles.filterInput}>
      <label>
        <p>Find contacts by name</p>
        <input
          className={styles.filter}
          type="text"
          name="number"
          value={value}
          onChange={inputChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  inputChange: PropTypes.func.isRequired,
};

export default Filter;