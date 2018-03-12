function Program(date) {
    // properties
    this.date = date;
    this.listOfMovies = [];
}

// methods
Program.prototype.getProgramDuration = function () {
    var programLength = 0;

    // Alternative way to loop arrays
    this.listOfMovies.forEach(function (movie) {
        programLength += movie.length;
    }, this);

    return programLength;
};

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
};

Program.prototype.getData = function () {
    var date = this.date;
    var movies = this.listOfMovies;
    var programDuration = this.getProgramDuration();
    var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

    var outputStr = dateStr + ", program duration " + programDuration + "min\n";

    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        outputStr += "\t\t" + movie.getData() + "\n";
    }

    return outputStr;
};

module.exports = { Program };