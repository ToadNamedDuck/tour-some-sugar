import { getVenues, getBands, getBookings } from "./database.js"

export const Venues = () =>{
    const venues = getVenues();
    let returnHTML = `<ul id="venuesList-ul">`;
    venues.forEach(venue =>(
        returnHTML+= `<li id="venue--${venue.id}">${venue.name}</li>`
    ))
    returnHTML+=`</ul>`
    return returnHTML;
}

document.addEventListener("click", (clickEvent) => {
    const clickTarget = clickEvent.target;
    if(clickTarget.id.startsWith("venue")){
        const bands = getBands();
        const bookings = getBookings();
        const venues = getVenues();
        const [,venueId] = clickTarget.id.split("--");

        let bandList = ``;
        bookings.forEach(booking => {
            if(booking.venueId === parseInt(venueId))
            bandList += bands[booking.bandId].name + ",";
        });
        window.alert(`${bandList.slice(0, -1)} are playing ${venues[parseInt(venueId)].name}.`)
    }
})