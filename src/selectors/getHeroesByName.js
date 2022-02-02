import { heroes } from "../data/heroes"

const getHeroesByName = (name = '') => {
    console.log('getHeroesByName called');
    if (name.trim() === '') return [];

    name = name.trim().toLowerCase();
    return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(name));
}

export default getHeroesByName;