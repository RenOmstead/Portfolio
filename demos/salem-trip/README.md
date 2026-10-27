# Salem Trip (portfolio demo)

A copy of the [Salem Trip](https://github.com/RenOmstead/SalemTrip) app for the
portfolio, with sample trip details in place of the real ones:

- `js/trip.js`: made-up dates (Fri Oct 15 to Tue Oct 19, 2027), a sample rental
  ("Lantern Cottage" on Main St, Rockport) and a sample home town (Albany, NY).
- `js/app.js`: saves under its own `salemtrip-demo.*` keys, so it never touches a
  plan saved by the real app, and runs without the offline service worker.
- `js/places.js`: two tips that named the real trip's dates are now general.

Everything else (map, places, lore, planner) is the same as the real app.
