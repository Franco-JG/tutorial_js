import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLElement} elementId 
 */
export const promiseRaceComponent = (elementId) => {

    elementId.innerHTML = 'Loading ...';
    const renderValue = (value) => {
        elementId.innerHTML = value;
    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
        mediumPromise(),
        fastPromise(),
        slowPromise()
    ])
    .then(renderValue);
    // .then(res => renderValue(res));
}

const slowPromise = () => new Promise(resolve =>{
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);
})

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve("Medium Promise");
    }, 1500);
})

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve("Fast Promise");
    }, 1000);
})