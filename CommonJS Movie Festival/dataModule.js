const { Genre } = require('./entities/genre');
const { Movie } = require('./entities/movie');
const { Program } = require('./entities/program');
const { Festival } = require('./entities/festival');

(function () {


    function createMovie(mTitle, mLength, genreName) {
        var genreObj = new Genre(genreName);
        // var movie = new Movie(movieTitle, new Genre(genreName), mLength);
        var movie = new Movie(mTitle, genreObj, mLength);

        return movie;
    }


    function createProgram(dateStr) {
        var date = new Date(dateStr);
        var program = new Program(date)
        return program;
    }

    // Create movies
    var spiderman = createMovie("Spider-Man: Homecoming", 133, "Action");
    var planetApes = createMovie("War for the Planet of the Apes", 140, "Drama");
    var darkTower = createMovie("The Dark Towe", 95, "Western");
    var deadpool = createMovie("Deadpool", 108, "Comedy");

    // Create programs
    var actionProgram = createProgram("Oct 28 2017");
    var comedyProgram = createProgram("Oct 29 2017");

    // Add action movies to action program
    actionProgram.addMovie(spiderman);
    actionProgram.addMovie(planetApes);
    actionProgram.addMovie(darkTower);

    // Add comedy movies to comedy program
    comedyProgram.addMovie(deadpool);

    // Create festival
    var weekendFestival = new Festival("Weekend festival");

    // Add programs to the festival 
    weekendFestival.addProgram(actionProgram);
    weekendFestival.addProgram(comedyProgram);

    // Output festival data 
    console.log(weekendFestival.getData());

})();