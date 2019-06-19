const fetch = require('node-fetch');

const img='https://image.tmdb.org/t/p/original/';

module.exports.getRandom = async function() {
    try{
        let num=Math.floor(Math.random()*(900-12+1)+12);
        console.log(num);
        const result = await (await fetch(`https://api.themoviedb.org/3/tv/${num}?api_key=556c9e8afea9599e8976b5c86b2cd6df`)).json();
        if(result["poster_path"]!==null){
            return `Title: ${result['name']}\n\nYear: ${result['first_air_date'].split('-')[0]}\n\nGenre: ${result['genres'].map((item)=>item.name)}\n\nPlot: ${result['overview']}\n\nIMDB: ${result['vote_average']}/10\nRuntime: ${result['episode_run_time'][0]} min\n${img+result['poster_path']}`;
        }else{
            this.getRandom();
        }

    }catch (err) {
        return 'Something went wrong, please try this command again';
    }

};