import { getBookings, getBands, getVenues } from "./database.js";

const venues = getVenues();
const bands = getBands();
const bookings = getBookings();

export const Bookings = () => {
    let returnHTML = `<div id="BookingsList">`;
    bookings.forEach(booking => {
        const date = new Date(booking.bookingTime).toLocaleDateString('en-US', {format: 'Date'});
        returnHTML+= `<div id="booking--${booking.id}">${bands[booking.bandId].name} is playing at ${venues[booking.venueId].name} on ${date}</div>`
    })
    returnHTML+=`</div>`
    return returnHTML;
}

document.addEventListener("click", (clickEvent) => {
    const clickTarget = clickEvent.target;
    if(clickEvent.target.id.startsWith("booking")){
    const [,targetBookingId] = clickTarget.id.split("--");
    const currentBand = bands[bookings[targetBookingId].bandId];
    window.alert(`${currentBand.name}\n${currentBand.genre}\nEstablish in ${currentBand.yearEst}\n${currentBand.numMembers} band members.`);
    }
})