const database = {
    bands: [{
        id: 0,
        name: "Scotland Barfight",
        numMembers: 4,
        genre: "Metal",
        yearEst: 2009
    },
    {
        id: 1,
        name: "Drop Anchor",
        numMembers: 3,
        genre: "Folk-Metal",
        yearEst: 2022
    },
    {
        id: 2,
        name: "Clockpole",
        numMembers: 4,
        genre: "Punk",
        yearEst: 2009
    }
    ],
    venues: [
        {
            id: 0,
            name: "Odin's Hall",
            address: "1 Valhalla Avenue",
            squareFeet: 583,
            maxOccupants: 63
        },
        {
            id: 1,
            name: "Beer Fjord",
            address: "20843 Scmirnoff Lane",
            squareFeet: 1562,
            maxOccupants: 182
        }
    ],
    bookings: [
        {
            id: 0,
            bandId: 2,
            venueId: 1,
            bookingTime: 1430676293141
        },
        {
            id: 1,
            bandId: 0,
            venueId: 0,
            bookingTime: 1824006984958
        },
        {
            id: 2,
            bandId: 0,
            venueId: 1,
            bookingTime: 1395871803481
        },
        {
            id: 3,
            bandId: 1,
            venueId: 0,
            bookingTime: 1762064844287
        }
    ]
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}