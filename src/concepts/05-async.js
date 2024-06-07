import { heroes } from "../data/heroes";

/**
 *  
 * @param {HTMLElement} elementId 
 */
export const asyncComponent = (elementId) => {
    
    const id1 = '5d86371f1efebc31def272e2';
    // console.log(findHero(id1));
    findHero(id1)
        .then( (name) => elementId.innerHTML = name);
}


/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
*/
const findHero = async (id) => {
    
    const hero = heroes.find(hero => hero.id === id);
    
    return hero.name;
}