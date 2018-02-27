require("dotenv").config();

var keys = require("./keys.js");

var fs = require("fs");

var require = require("request");

var twitter = require("twitter");

var spotifyApi = require("spotify");

var command = process.argv[2];


var spotify = new Spotify(keys.spotify);

var client = new Twitter(keys.twitter);


	var nodeCommands = function() {

			if (command === "my-tweets") {

				params: {screen_name: strawberymoonm};

				 client.get("statuses/user_timeline/", params, function(error, data, response){

				 	if (!error) {
					 		for (var i = 0; i < data.length && i < 20; i++) {
					 			console.log(data[i].text + data[i].tweetedAt);
					 		}
					 	}

					});
				 }

		else if (command === "spotify-this-song") {

				var Song = process.argv;

				var song1 = "";

				for (var i = 3; i < Song.length; i++) {

					Song = song1 + " " + Song[i];

					}
			}

				if (song1) {

					spotify.search({type: "track", query: "song"}, 

						function(err, data) {		

						if(err) {

						return console.log("Error occurred: " + err);

					}

					console.log("Artist Name: " + data.tracks.items[0].album.artists[0].name + "\n Song Name: " + Song + "\n Preview Link: " + data.tracks.items[0].preview_url + "\n Album: " + data.tracks.items[0].album.name);
					
					})
					
					;}

		else {

			spotify.search({type:"track", query: "The Sign"}), function (err, data) {
				if (err){
					return console.log("Error: " + error);
					}
				console.log("Artist Name: " + data.tracks.items[0].album.artists[0].name + "\n Song Name: 'The Sign'" + "Preview Link: " + data.tracks.items[0].preview_url + "\n Album: " + data.tracks.items[0].album.name);
		};
	}
}

		if (command === "movie-this") {

			var movie1 = process.argv;
			var movie = "";

			for (var i = 3; i < movie1.length; i++) {

				movie = movie + "+" + movie1[i];
			}

			var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
		}


		if (movie) {

				request(queryUrl, function(error, response, body) {

				if (!error) {

				console.log("Movie Title: " + JSON.parse(body).Title + "\n Year: " + JSON.parse(body).Year + "\n IMDB Rating: " + JSON.parse(body).imdbRating + "\n Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "\n Country: " + JSON.parse(body).Country + "\n Lanugage: " + JSON.parse(body).Plot + "\n Actors: " + JSON.parse(body).Actors);
					
					}
				});
		}


		else {

			if (!error) {

				var queryUrl = "http://www.omdbapi.com/?t=mr.nobody&y=&plot=short&apikey=trilogy";

				request(queryUrl, function(error, response, body) {
					console.log("Movie Title: " + JSON.parse(body).Title + "\n Year: " + JSON.parse(body).Year + "\n IMDB Rating: " + JSON.parse(body).imdbRating + "\n Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "\n Country: " + JSON.parse(body).Country + "\n Lanugage: " + JSON.parse(body).Plot + "\n Actors: " + JSON.parse(body).Actors);    
		  });
		};


		
		if (command === 'do-what-it-says') {


	fs.readFile("random.txt", "utf8", function(error, data) {


		if (error) {
			return console.log(error);
		}

		var dataArr = data.split(",");

		spotify.search({type: 'track', query: dataArr[1]}, function(err, data) {

			if(err) {

				return console.log("Error Occurred: " + err);
			}

			console.log("Artist Name: " + data.tracks.items[0].album.artists[0].name + "\n Song Name: " + dataArr[1] + "\n Preview Link: " + data.tracks.items[0].preview_url + "\n Album: " + data.tracks.items[0].album.name);
		});

	});
};