import PropTypes from 'prop-types';


// import styles from './people.module.css'

export default function People(props) {
  const { data } = props
  // console.log('this is the people data: ', data)

  if (!data || !data.results) {
    return <div>Loading...</div>; // or some other fallback UI
  }

  const properties = data.results && data.results[0] && data.results[0].properties
  
  const names = data.results.map((item) => item.name);
  console.log('these are the names:', names);

  return (
    <div >
      {names.map((name, index) => {
        return (
          <div key={index}>
          <h2>{name}</h2>
          </div>
        )
      })}
    </div>
    )
}

People.defaultProps = {
  data: {
    results: [] 
  }
}

People.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        properties: PropTypes.shape({
          title: PropTypes.string.isRequired,
          properties: PropTypes.object // not required
          // Add other properties if needed
        }).isRequired,
      })
    ),
  }),
};