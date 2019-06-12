const fetch = require('node-fetch');

module.exports.getAll = async function() {
    try{
        const res = await (await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=556c9e8afea9599e8976b5c86b2cd6df&top_rated`)).json();
        const result=res['results'];
        const message = [];
        result.forEach((item)=>{message.push(`${item['original_title']}`)});
        return message.join('\n\n');

    }catch (err) {
        return err.message;
    }

};

