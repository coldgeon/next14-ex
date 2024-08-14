'use client';

import Link from 'next/link';
import styles from '../app/styles/movie.module.css';
import { useRouter } from 'next/navigation';

interface IMovieProps {
  id: string;
  poster_path: string;
  title: string;
}

export default function Movie({ id, poster_path, title }: IMovieProps) {
  const router = useRouter();

  const posterClicked = () => {
    router.push(`movies/${id}`);
  };

  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={posterClicked} />
      <Link href={`movies/${id}`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
}
