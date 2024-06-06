import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLElement} elementId 
 */
export const callbacksComponent = ( elementId ) => {
    
    const id1 = "5d86371f1efebc31def272e2";
    const id2 = "5d86371f233c9f2425f16916";
    //! Callback Hell, difícil de mantener
    findHero(id1, (error, hero1) => {
        // elementId.innerHTML = heroe?.name || 'No existe el id';
        // (error) ? elementId.innerHTML = error :
        if (error) {
            elementId.innerHTML = error;
            return;
        }
        findHero(id2, (error, hero2) => {
            if (error) {
                elementId.innerHTML = error;
                return;
            }
            elementId.innerHTML = `${hero1.name} - ${hero2.name}`;
        });
    });
}

/**
 * @param {String} id
 * @param {(error: String, callback: Object)=> void} callback
 */
const findHero = (id, callback) => {
    const hero = heroes.find( hero => hero.id === id);
    if(!hero) {
        callback(`No existe el heroe con el id: ${id}`);
        return;
    }
    callback(null, hero);
}