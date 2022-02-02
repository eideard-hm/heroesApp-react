import { heroes } from "../data/heroes"

const getHeroesByPublisher = (publisher) => {

    const validPusblisher = ['DC Comics', 'Marvel Comics'];

    if(!validPusblisher.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher.` );
    }

    return heroes.filter(hero => hero.publisher === publisher);
}

export default getHeroesByPublisher;