# liri-node-app

# What it does

This app is a language interpretation and recognition interface built using NodeJS. It takes four commands, each one returning a different result that will appear in the command line.

# Commands

"my-tweets":

This returns the last 20 tweets from the Twitter account linked and shows them in the Bash terminal.

"spotify-this-song":

This, paired with a song name, will return the song, artist, preview link, and album the song is from using the Spotify API. If no song name is provided, it will default to "The Sign" by Ace of Base.

"movie-this":

This will pull data, using the Request node package, from the OMDB API to return a film and information on it. If no film is provided, it will default to Mr. Nobody.

"do-what-it-says": 

This command uses the fs node package to run the Spotify command from inside the random.txt file.
