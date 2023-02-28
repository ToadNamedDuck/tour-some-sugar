import { Bands } from "./bands.js";
import { Bookings } from "./bookings.js";

const mainContainer = document.querySelector("#main-body")
const html = `
<h2>Bookings</h2>
<article class="bookings-article">${Bookings()}</article>
<h2>Bands</h2>
`
mainContainer.innerHTML = html;