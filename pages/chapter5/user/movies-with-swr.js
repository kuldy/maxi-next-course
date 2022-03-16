import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

function MoviesWithSwr(props) {
  const [movies, setMovies] = useState(props.movies);
  const { data, error } = useSWR("http://localhost:8080/api/movies", fetcher);

  useEffect(() => {
    if (data) {
      setMovies(data.movies);
    }
  }, [data]);

  if (error) return <h1>Failed To Load </h1>;

  if (!data && !movies) return <h1>...loading</h1>;

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:8080/api/movies");
  const data = await response.json();

  return {
    props: {
      movies: data.movies,
    },
  };
};
export default MoviesWithSwr;
