import { useEffect, useState } from "react";

function MoviesListPage() {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8080/api/movies")
      .then((response) => response.json())
      .then((data) => {
        const films = data.movies;
        setMovies(films);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>is loading...</p>;
  if (!movies) return <p>No data found yet</p>;

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}
export default MoviesListPage;
