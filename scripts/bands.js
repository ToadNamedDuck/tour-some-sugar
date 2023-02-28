import { getBands } from "./database.js";

export const Bands = () => {
    const bandsArray = getBands();
    let returnHTML = `<ul>`;
    bandsArray.forEach(band =>{
        returnHTML+= `<li id="band--${band.id}">${band.name}</li>`;
    })
    returnHTML+= `</ul>`
    return returnHTML;
}