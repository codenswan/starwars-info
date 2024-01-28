// No changes needed
import React from 'react';

import styles from './options.module.css';

import PropTypes from 'prop-types';

export default function Options(props) {
  const { selection, setSelection } = props;

  Options.propTypes = {
    selection: PropTypes.string.isRequired,
    setSelection: PropTypes.func.isRequired
  };

  const questions = ['people', 'films', 'species'];

  return (
    <div className='styles.buttonContainer'>
      {questions.map((question, index) => {
        return (
          <button
            onClick={setSelection(question)}
            className={`${styles.buttons} 
            ${question === selection ? styles.selectedButton : styles.nonSelectedButton}`}
            key={index}
          >
            {question}
          </button>
        );
      })}
    </div>
  );
}

