const baseURL = 'https://swapi.dev/api/';

export function getStarships() {
    return fetch(`${baseURL}starships/`, { mode: 'cors' }).then(res => res.json());
}

export async function getPilots(urls) {
    const promises = urls.map(url => fetch(url).then(res => res.json()));
    const pilotObjects = await Promise.all(promises);
    return pilotObjects;
}