import { heroes } from "../data/heroes";

/**
 *  
 * @param {HTMLElement} elementId 
 */
export const asyncComponent = (elementId) => {
    
    const id1 = '5d86371f1efebc31def272e2';
    console.log('Inicio');
    findHero(id1)
        .then( name => elementId.innerHTML = name)
        .catch( error => elementId.innerHTML = error);  //* Se ejecuta después del throw

    console.log('Fin');
}


/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
*/
const findHero = async (id) => {
    
    const hero = heroes.find(hero => hero.id === id);
    if(!hero){
        throw `Hero with id ${id} not found.`;
    }
    return hero.name;
}