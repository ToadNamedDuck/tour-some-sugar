import { Bands } from "./bands.js";
import { Bookings } from "./bookings.js";
import { Venues } from "./venues.js";

const mainContainer = document.querySelector("#main-body")
const html = `
<div id="DivBookings">
<h2>Bookings</h2>
<article class="article-bookings">${Bookings()}</article>
</div>
<div id="DivBandAndVenue">
<div id="DivBand">
<h2>Bands</h2>
<article class="article-bands">${Bands()}</article>
</div>
<div id="DivVenue">
<h2>Venues</h2>
<article class="article-venues">${Venues()}</article>
</div>
</div>
`
mainContainer.innerHTML = html;