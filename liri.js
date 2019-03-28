require("dotenv").config();
var axios = require("axios");
var moment = require('moment');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
// Axios call Bands API
// node.liri.js concert-this <artist/band name> to creat the queryULR
// axios to call bands API and print the res
// Name of the venue
// Venue location
//  Date of the Event (use moment to format this as "MM/DD/YYYY")
var userchoose = process.argv[2];
var input = process.argv.slice(3).join(" ");
function conditionCheck() {
    if (userchoose === "concert-this") {
        runBands();
    }
    if (userchoose === "spotify-this-song") {
        runSpotify();
    }
    if (userchoose === "movie-this") {
        runMovie();
    }
    if (userchoose === "do-what-it-says") {
        runText();
    }
}
conditionCheck();
function runBands() {
    // var input = process.argv.slice(3).join(" ");
    var artist = input;
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function (response) {
            var results = response.data[0].venue;
            console.log("Name of the venue: " + JSON.stringify(results.name));
            console.log("venue location: " + JSON.stringify(results.city + results.country));
            console.log("Date of the Event: " + moment(results.datatime).format("MM/DD/YYYY"));
        },
            function (error) {
                if (error.response) {
                    console.log(error.response.data)
                }
                else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("Error", error.message);
                }
                console.log(error.config);
            }
        );
}
//spotify API
//node liri.js spotify-this-song '<song name here>'
function runSpotify() {
    // var input = process.argv.slice(3).join(" ");
    spotify.search({ type: 'track', query: input }, function (err, data) {
        if (err) {
             console.log('Error occurred: ' + err);
             input = "The Sign";
             runSpotify();
        }
        if(data){
        console.log("Artist(s): " + data.tracks.items[0].album.artists[0].name);
        console.log("The song's name: " + data.tracks.items[0].name);
        console.log("A preview link: " + data.tracks.items[0].preview_url);
        console.log("The album: " + data.tracks.items[0].album.name);
        }
    });
}
//movieAPI get the infor 
//creat the queryURL
//node liri.js movie-this '<movie name here>'
function runMovie() {
    var name;
    // var input = process.argv.slice(3).join(" ");

    if (!input) {
        name = "Mr. Nobody";
    }
    else {
        name = input;
    }
    // console.log(name)

    axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + name)
        .then(
            function (response) {
                var results = response.data;
                console.log("Title of the movie: " + results.Title + "\nYear the movie came out: "
                    + results.Year + "\nIMDB Rating of the movie: " + results.Ratings[0].Value
                    + "\nRotten Tomatoes Rating of the movie: " + results.Ratings[1].Value
                    + "\nCountry where the movie was produced: " + results.Country + "\nLanguage of the movie: " + results.Language
                    + "\nPlot of the movie: " + results.Plot + "\nActors in the movie: " + results.Actors);
                if (!input) {
                    console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/" + "\nIt's on Netflix!")
                }
            },
            function (error) {
                if (error.response) {
                    console.log(error.response.data)
                }
                else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("Error", error.message);
                }
                console.log(error.config);
            }
        )
}
//random txt 
function runText() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            console.log("ERR");
        }
        else {
            var arr =JSON.parse(data);
            userchoose=arr[2].userchoose;
            input=arr[2].input;
            console.log(userchoose);
            console.log(input);
            conditionCheck();
        }
    });
}
