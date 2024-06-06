import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLElement} elementId 
 */
export const callbacksComponent = ( elementId ) => {
    
    const id = "5d86371f1efebc31def272e2";

    findHero(id, (error, heroe) => {
        // elementId.innerHTML = heroe?.name || 'No existe el id';
        // (error) ? elementId.innerHTML = error :
        if (error) {
            elementId.innerHTML = error;
        }
        elementId.innerHTML = heroe.name;
    });
}

/**
 * @param {String} id
 * @param {(error: String, callback: Object)=> void} callback
 */
const findHero = (id, callback) => {
    const hero = heroes.find( heroe => heroe.id === id);
    if(!hero) {
        callback(`No existe el heroe con el id: ${id}`);
        return;
    }
    callback(null, hero);
}