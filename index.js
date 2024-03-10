const { error } = require('console');
const express = require('express'),
morgan = require('morgan');
const app = express();

// Logging midleware
app.use(morgan('common'));

// Movie data
let topTenMovies = [
  {
    title: 'The Goddather',
    director: 'Francis Ford Coppola',
    year: 1972
  },
  {
    title: 'Shawshank Redemption',
    director: 'Frank Darabont',
    year: 1994
  },
  {
    title: 'Dark Knight',
    director: 'Christopher Nolan',
    year: 2008
  },
  {
    title: 'The Godfather: Part II',
    director: 'Francis Ford Coppola',
    year: 1974
  },
  {
    title: 'I12 Angry Men',
    director: ['Sidney Lumet'],
    year: 1957
  },
  {
    title: 'Lord of the Rings: The Return of the King',
    director: 'Peter Jackson',
    year: 2003
  },
  {
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    year: 1994
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    director: 'Peter Jackson',
    year: 2001
  },
  {
    title: 'The Good, the Bad, and the Ugly',
    director: 'Sergio Leone',
    year: 1966
  },
  {
    title: 'Goodfellas',
    director: 'Martin Scorsese',
    year: 1990
  },
  ];

let myLogger = (req, res, next) => {
    console.log(req.url);
    next();
  };

  app.use(myLogger);

// Welcome route

  app.get('/', (req, res) => {
    res.send('Welcome to Movie API!');
});

// Movie route
app.get( '/movies', (req, res) => {
    res.json(topTenMovies);
});

//Static file
app.use('/documentation', express.static('public', {index: 'documentation.html'}));

// Error handling midleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(8080, () => {
    console.log('My first Node test server is running on Port 8080.');
});