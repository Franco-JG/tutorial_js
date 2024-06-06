import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLElement} elementId 
 */
export const promiseComponent = (elementId) => {

    const renderHero = (hero) => {
        elementId.innerHTML = hero.name;
    }

    const renderError = (error) => {
        elementId.innerHTML = `
        <h2>Error:</h2>
        <h3>${error}</h3>`;
    }

    const id1 = '5d86371fd55e2e2a30fe1ccb2';

    findHero(id1)
        .then(renderHero)
        // .then( les => renderHero(les));
        .catch(renderError);
        // .catch(error => renderError(error));

}








/**
 * @param {String} id 
 * @returns {Promise }
 */
const findHero = (id) => {

    // const promise = new Promise((resolve, reject) => {
    return new Promise((resolve, reject) => {

        const hero = heroes.find( hero => hero.id === id);

        if(hero){
            resolve(hero);
            return;
        }
        reject(`Reject: Hero with id ${id} not found`);

    });
    // return promise;
}