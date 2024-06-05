/**
 * 
 * @param {HTMLElement} elementId 
 */
export const environmentComponent = ( elementId ) => {
    const html = 
    `
    <strong>Environment variables:</strong> <br/>
    BASE_URL = ${import.meta.env.BASE_URL}<br/>
    DEV = ${import.meta.env.DEV}<br/>
    MODE = ${import.meta.env.MODE}<br/>
    PROD = ${import.meta.env.PROD}<br/>
    SSR = ${import.meta.env.SSR}<br/>
    API_KEY = ${import.meta.env.VITE_API_KEY}<br/>
    VARIABLE_NAME = ${import.meta.env.VITE_VARIABLE_NAME}<br/>
    `
    console.log(import.meta.env);
    elementId.innerHTML = html;
}