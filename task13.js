// Есть объект пользователей и id популярных фильмов
// необходимо изменить массив пользователей так, чтобы у каждого пользователя было подробное описание его фильма
const util = require("util");

function deepLog(stuff) {
    return util.inspect(stuff, { showHidden: false, depth: null, colors: true });
}

const users = [
    {id: 'aa', favoriteMovies: ['11', '22']},
    {id: 'bb', favoriteMovies: ['33', '22']}
];

const movies = [
    {id: '11', name: 'film1', description: ''},
    {id: '22', name: 'film2', description: ''},
    {id: '33', name: 'film3', description: ''},
    {id: '44', name: 'film4', description: ''}
];


const joinMoviesToUsers = (users, movies) => {

    const moviesByIds = movies.reduce((accumulator, movie) => {
        accumulator[movie.id] = movie;
        return accumulator;
    }, {});

    return users.map((user) => ({
        ...user,
        favoriteMovies: user.favoriteMovies.map((movieId) => moviesByIds[movieId])
    }));
};

const result = joinMoviesToUsers(users,movies);
console.log(deepLog(result))