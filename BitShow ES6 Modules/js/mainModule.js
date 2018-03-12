import { createTVShows, searchedShows } from './TVShows.js';
import { displayShows,
    showSearch,
    displaySingleShow,
    displayCast,
    displaySeasons } from './UIModule.js';

const initSingleShow = () => {

    let singleShowId = localStorage.getItem("showId");
    const singleShowRequest = $.get({
        url: `http://api.tvmaze.com/shows/${singleShowId}`
    })

    singleShowRequest.done(response => {
        displaySingleShow(response);
    })

    const allSeasons = $.get({
        url: `http://api.tvmaze.com/shows/${singleShowId}/seasons`
    })

    allSeasons.done(response => {

        response.forEach(response => {
            displaySeasons(response);
        })

    })

    const cast = $.get({
        url: `http://api.tvmaze.com/shows/${singleShowId}/cast`
    })

    cast.done(response => {

        response.forEach(response => {
            const { person } = response;
            displayCast(person);
        })
    })
}

const inputDropdown = () => {

    $('#myInput').on('click', () => {
        $('#myDropdown').toggleClass("show");
    })

    $('input').keyup(searched);
}

const allShows = () => {

    const allShowsRequest = $.get({
        url: `http://api.tvmaze.com/shows`
    })

    allShowsRequest.done(response => {
        const shows = response.slice(0, 50);

        shows.forEach(show => {
            const singleShow = createTVShows(show.id, show.name, show.image.original);
            displayShows(singleShow);
        })

        $('.showDiv').on('click', switchToSingleShow);
    })
}

const searched = () => {

    const searchedShow = $('input').val();

    var request = $.get({
        url: `http://api.tvmaze.com/search/shows?q=${searchedShow}`
    });

    request.done(response => {
        $('#myDropdown').text("");

        const myShows = searchedShows(response)
        showSearch(myShows)

        $('.searchList').on('click', switchToSingleShow);
    });
}

function switchToSingleShow(event) {

    const showId = $(this).attr('id');
    localStorage.setItem('showId', showId);
}


export {
    inputDropdown,
    allShows,
    switchToSingleShow,
    searched,
    initSingleShow
};