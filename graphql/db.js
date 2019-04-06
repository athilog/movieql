export let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 2
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 7
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 8
  },
  {
    id: 3,
    name: "Star Wars - The new one",
    score: 5
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredPeople = movies.filter(movie => movie.id == id);
  return filteredPeople[0];
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
