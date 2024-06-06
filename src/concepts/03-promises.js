import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLElement} elementId 
 */
export const promiseComponent = (elementId) => {

    const renderHero = (hero) => {
        elementId.innerHTML = hero.name;
    }

    const renderTwoHeros = (hero1, hero2) =>{

        elementId.innerHTML = `
            <h3>${hero1.name}</h3>
            <h3>${hero2.name}</h3>
        `
    }

    const renderError = (error) => {
        elementId.innerHTML = `
        <h2>Error:</h2>
        <h3>${error}</h3>`;
    }

    const id1 = '5d86371fd55e2e2a30fe1ccb2';
    const id2 = '5d86371fd55e2e2a30fe1cc4';

    //! Promise hell
    findHero(id1)
        .then((hero1) => {
            findHero(id2)
                .then((hero2) =>{
                    renderTwoHeros(hero1, hero2);
                })
                .catch(renderError)

        })
        .catch(renderError);

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