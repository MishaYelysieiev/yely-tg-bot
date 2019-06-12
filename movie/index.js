const fetch = require('node-fetch');

const img='https://image.tmdb.org/t/p/original/';

module.exports = async function(film) {
    try{
        const result = await (await fetch(`http://www.omdbapi.com/?apikey=6547d8e&t=${film}`)).json();
        console.log(`Title: ${result['Title']}`);
        return `Title: ${result['Title']}\n\nDirector: ${result['Director']}\nGenre: ${result['Genre']}\nActors: ${result['Actors']}\n\nPlot: ${result['Plot']}\n\nIMDB: ${result['imdbRating']}\nRuntime: ${result['Runtime']}\n${result['Poster']}`

    }catch (err) {
        return err.message;
    }
};


module.exports.getRandom = async function() {
    try{
        let num=Math.floor(Math.random()*(950-12+1)+12);
        console.log(num);
        const result = await (await fetch(`https://api.themoviedb.org/3/movie/${num}?api_key=556c9e8afea9599e8976b5c86b2cd6df`)).json();
            console.log(`Title: ${result['original_title']}`);
            return `Title: ${result['original_title']}\n\nYear: ${result['release_date'].split('-')[0]}\n\nGenre: ${result['genres'].map((item)=>item.name)}\n\nPlot: ${result['overview']}\n\nIMDB: ${result['vote_average']}/10\nRuntime: ${result['runtime']} min\n${img+result['poster_path']}`;


    }catch (err) {
        return err.message;
    }

};

