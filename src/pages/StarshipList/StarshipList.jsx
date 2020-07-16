import React from 'react';
import styles from './StarshipList.module.css';
import { Link } from 'react-router-dom';


function StarshipList(props) {
    const starships = props.starships.map(({name}, idx) =>
        <Link className={styles.Starship} to={{
            pathname: `/${idx}`,
            state: {ship: props.starships[idx]}
        }}>
            {name}</Link>
    );
    return (
        <div className={styles.FlexContainer}>{starships}</div>
    );
}

export default StarshipList;