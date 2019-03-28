
# liri-node-app
## About
LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Available functions:

            bands in town

            spotify

            omdb

            random

## What it does
#### 1. Band in Town
##### node liri.js concert-this <insert artist>
This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal

            Name of the venue

            Venue location

            Date of the Event ("MM/DD/YYYY")

![Screenshot (S-1)](https://user-images.githubusercontent.com/47795010/55131745-22010f00-50dd-11e9-9b46-b098580c583a.png) 

#### 2. Spotify

##### node liri.js spotify-this-song <insert song title>

This will show the following information about the song in your terminal/bash window

             Artist(s)
             The song's name
             A preview link of the song from Spotify
             The album that the song is from
   
    
![Screenshot (S-1)](https://user-images.githubusercontent.com/47795010/55131745-22010f00-50dd-11e9-9b46-b098580c583a.png)

#####  If no song is provided then your program will default to "The Sign" by Ace of Base and the terminal widow display as follow:

![Screenshot (S-2)](https://user-images.githubusercontent.com/47795010/55131750-25949600-50dd-11e9-9327-70aff6834b70.png)

#### 3. Movies

##### node liri.js movie-this <insert movie title>

This will output the following information to your terminal/bash window:
      
            Title of the movie.
            Year the movie came out.
            IMDB Rating of the movie.
            Rotten Tomatoes Rating.
            Country where the movie was produced.
            Language of the movie.
            Plot of the movie.
            Actors in the movie.
  

![Screenshot (3-1)](https://user-images.githubusercontent.com/47795010/55131754-29c0b380-50dd-11e9-94fc-a4237ede3b58.png)

##### If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.' and the outputs like the follow:
![Screenshot (movie-2)](https://user-images.githubusercontent.com/47795010/55131770-32b18500-50dd-11e9-8772-ac04de559049.png)

#### 4. Do What It Says

##### node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

Right now it will run concert-this for "Skrillex".

![Screenshot (do)](https://user-images.githubusercontent.com/47795010/55131778-3b09c000-50dd-11e9-844f-e77b6bca8f54.png)


