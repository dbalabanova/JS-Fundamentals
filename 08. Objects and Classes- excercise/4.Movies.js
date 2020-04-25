function moviess(array) {
    let movies = [];
    array
        .forEach(line => {
            let words = line.split(' ');
            if (line.includes('addMovie')) {
                let movieName = words.slice(1).join(' ');
                movies.push({ name: movieName });
            } else if (line.includes('directedBy')) {
                let index = words.indexOf('directedBy');
                let movieDirector = words.slice(index + 1).join(' ');
                let movieName = words.slice(0, index).join(' ');
                let movie = movies.find(m=>m.name === movieName);
                if(movie) {
                    movie.director = movieDirector;
                } 
            } else if (line.includes('onDate')) {
                let index = words.indexOf('onDate');
                let movieDate = words.slice(index + 1).join(' ');
                let movieName = words.slice(0, index).join(' ');
                let movie = movies.find(m=>m.name === movieName);

                if(movie) {
                    movie.date = movieDate;
                }
            }
        });

        for (let m of movies) {
            if(m.hasOwnProperty('name') && m.hasOwnProperty('director') && m.hasOwnProperty('date')) {
                console.log(JSON.stringify(m));
                
            }
        }
}
moviess([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)