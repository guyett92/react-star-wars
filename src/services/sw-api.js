const baseURL = 'https://swapi.dev/api/';

export function getStarships() {
    return fetch(`${baseURL}starships/`, { mode: 'cors' }).then(res => res.json());
}