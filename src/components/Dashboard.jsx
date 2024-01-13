import React, { useState } from 'react';
import styles from './dashboard.module.css';
import useFetchData from '../hooks/useFetchData';
import Options from './Options';
import People from './People'
import Films from './Films'

export default function Dashboard() {
  const [selection, setSelection] = useState(false);
  const { data, loading, error } = useFetchData(selection);

  function onClickHandler(clickedButton) {
    console.log(clickedButton);
    return () => {
      setSelection(clickedButton);
    };
  }

  const dataRender = {
    
    people: <People data={data} />,
    films: <Films data={data} />,
    // species: <Species data={data} />,
  };

  return (
    <div className={styles.dashboardContainer}>
      <div >
        {/* className={styles.layout} */}
        <h1>STARWARS</h1>
        <Options selection={selection} setSelection={onClickHandler} />
        {/* {loading && (
          <Loader />
        )} */}
        {(data && !loading) && (
          dataRender[selection]
        )}
      </div>
    </div>
  );
}
