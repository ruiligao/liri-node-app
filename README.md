# liri-node-app
## About
LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.


### What it does
#### 1. Band in Town
node liri.js concert-this <insert artist>
This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal
      Name of venue
      Venue location
      Data of the Event("MM/DD/YYYY)
![Screenshot (47)](https://user-images.githubusercontent.com/47795010/55130527-6e961b80-50d8-11e9-9d9d-cb1ef3b5e5f3.png)

#### 2. Spotify
node liri.js spotify-this-song <insert song title>

This will show the following information about the song in your terminal/bash window


    The song's name
    A preview link of the song from Spotify
    The album that the song is from
    If no song is provided then your program will default to "The Sign" by Ace of Base

#### 3. Movies
node liri.js movie-this <insert movie title>

This will output the following information to your terminal/bash window:


![Screenshot (47)](https://user-images.githubusercontent.com/47795010/55130527-6e961b80-50d8-11e9-9d9d-cb1ef3b5e5f3.png)

    Title of the movie.
    Year the movie came out.
    IMDB Rating of the movie.
    Country where the movie was produced.
    Language of the movie.
    Plot of the movie.
    Actors in the movie.
    Rotten Tomatoes Rating.
    Rotten Tomatoes URL.
    If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
    
  

#### 4. Do What It Says
node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

Right now it will run concert-this for "Skrillex".
