# Pokemon Factoids

Checkout link for deployed app.
[https://limitless-anchorage-60886.herokuapp.com/](https://limitless-anchorage-60886.herokuapp.com/)

Feel free to add or delete to the deck of PokeCards.

### Setup repo on local machine

Clone repo to local machine.

Make sure mongo is running.

From root:

Update mongoURI in /database/index.js and /database/utils/dropCollection.js to:

```
const mongoURI = 'mongodb://localhost:27017/pokemon-test';
```

```
npm install
```

Cd into /client:

```
npm install
```

Update /client/package.json proxy: "http://localhost:3001/"

```
npm run build
```

Run app on "http://localhost:3001"

# Welcome

Hi! Welcome to our Code Test repository! If you're here, it's likely because you've been asked by someone at OpenDrives to complete a code test. Find the folder that's the position you're applying for, and give it a whack!

Send any questions you have to code@opendrives.com and we'll get right back to you!

GLHF!
