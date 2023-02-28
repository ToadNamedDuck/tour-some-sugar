import { getBookings, getBands, getVenues } from "./database.js";

export const Bookings = () => {
    const venues = getVenues();
    const bands = getBands();
    const bookings = getBookings();
    let returnHTML = ``;
    bookings.forEach(booking => {
        const date = new Date(booking.bookingTime).toLocaleDateString('en-US', {format: 'Date'});
        returnHTML+= `<div class="booking">${bands[booking.bandId].name} is playing at ${venues[booking.venueId].name} on ${date}</div>`
    })
    return returnHTML;
}