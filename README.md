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

From root folder:

```
npm run seed-db
npm start
```

Run app on "http://localhost:3001"
