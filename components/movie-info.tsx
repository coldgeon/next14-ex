import { API_URL } from '../app/constants';
import styles from '../app/styles/movie-info.module.css';

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movies = await getMovie(id);
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movies.poster_path} alt={movies.title} />
      <div>
        <h1 className={styles.title}>{movies.title}</h1>
        <h3 className={styles.info}>🌟{movies.vote_average.toFixed(1)}</h3>
        <p className={styles.info}>{movies.overview}</p>
        {/* <a href={}></a> */}
      </div>
    </div>
  );
}
