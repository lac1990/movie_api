const express = require('express'),
 morgan = require('morgan'),
fs = require('fs'), // import built in node modules fs and path 
path = require('path');
const app = express();

let topMovies = [
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
    directorr: 'Peter Jackson',
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

 // setup logging
 const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})
  // enable morgan logging to 'log.txt'
 app.use(morgan('combined', {stream: accessLogStream})); 


// setup app routing
app.use(express.static('public'));


// GET request
  app.get('/', (req, res)=>{
    res.send('Welcome to Movie Api!');
  });
  app.get('/documentation.html', (req, res)=>{
    res.sendFile('public/documentation.html', {root: __dirname});
  });
app.get('/movies', (req, res)=>{
  res.json(topMovies);
});


// Error handling midleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


app.listen(8080, () => {
    console.log('My first Node test server is running on Port 8080.');
});
