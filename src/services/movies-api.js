const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '16e14e9af53c31cb98f8410d529883f4';

async function fetchMovies(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies(page) {
  return fetchMovies(
    `${BASE_URL}/trending/all/day?api_key=${KEY}&page=${page}`,
  );
}

export function fetchSearchMovies(query, page) {
  return fetchMovies(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`,
  );
}

export function fetchDetailsMovies(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`,
  );
}

export function fetchCastMovies(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
  );
}

export function fetchReviewsMovies(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`,
  );
}
