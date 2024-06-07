import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLElement} elementId 
 */
export const asyncAwaitComponent = async (elementId) => {

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f25a058e5b1c8a65e';

    try {
        const hero1 = await findHero(id1);
        const hero2 = await findHero(id2);
        elementId.innerHTML = `${hero1} / ${hero2}`;

    } catch (error) {
        elementId.innerHTML =  error;
    }

}

const findHero = async (id) => {

    const hero = heroes.find(hero => hero.id === id);
    if(!hero)
        throw `Hero with id ${id} not found`;

    return hero.name;
}