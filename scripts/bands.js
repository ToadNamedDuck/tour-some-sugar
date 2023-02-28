import { getBands, getVenues, getBookings } from "./database.js";

export const Bands = () => {
    const bandsArray = getBands();
    let returnHTML = `<ul id="bandList--ul">`;
    bandsArray.forEach(band =>{
        returnHTML+= `<li id="band--${band.id}">${band.name}</li>`;
    })
    returnHTML+= `</ul>`
    return returnHTML;
}
const venues = getVenues();
const bands = getBands();
const bookings = getBookings();
document.addEventListener("click", clickEvent =>{
    const clickTarget = clickEvent.target;
    if(clickTarget.id.startsWith("band")){
        let venueNames = ``;
        const [,bandId] = clickTarget.id.split("--");
        for(const booking of bookings){
            if(booking.bandId === parseInt(bandId)){
                venueNames+= `${venues[booking.venueId].name},`
            }
        }
            window.alert(`${bands[bandId].name} is playing at ${venueNames.slice(0, -1)}`);
    }
})