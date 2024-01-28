//import React from 'react'
import PropTypes from 'prop-types';
import styles from './dashboard.module.css';

export default function Films(props) {
    const {data} = props
    console.log('this is the films data: ', data)

    if (!data || !data.result) {
        return <div>Loading...</div>; // or some other fallback UI
    }
    
    const titles = data.result.map((item) => item.properties.title);
    //console.log('these are the titles:', titles);
    const films = data.result.map((item) => item.properties);
    //console.log('these are the films data:', films); 
  
    return (
        <div className={styles.filmsDasboard}>
          
            {films.map((film, index) => {
              const headers = Object.keys(film).filter(header => {
                  if (['created', 'edited', 'url']
                      .includes(header)) return false;
                  if (Array.isArray(film[header])) return false;
                  return true;
              })

            return (
              <div key={index}>
                    <h2>{film.title}</h2>
                    {headers.map(header => {
                       //* Format header to uppercase and make other changes
                        let formattedHeader = header
                            .replace('_', ' ')
                            .replace(/\b\w/g, firstChar => firstChar.toUpperCase());
                  //* Remove 'Id' from 'EpisodeId' header
                    if (formattedHeader === 'Episode Id') {
                     formattedHeader = 'Episode'; 
                    }
                    if (formattedHeader === 'Opening Crawl') {
                      formattedHeader = 'Description';
                    }
                        
                        return (
                    <div key={header}>
                          <p>{formattedHeader}: {film[header]
                          }
                          </p>
                    </div>
                  )
                })}
              </div>
            )
            })}
            </div>
      )
    }
    
    Films.propTypes = {
      data: PropTypes.shape({
        result: PropTypes.arrayOf(
          PropTypes.shape({
            properties: PropTypes.shape({
              title: PropTypes.string.isRequired,
              // Add other properties if needed
            }).isRequired,
          })
        ),
      }),
    };
