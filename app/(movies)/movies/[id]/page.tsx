import { Suspense } from 'react';
import { API_URL } from '../../../(home)/page';
import MovieVideo from '../../../../components/movie-video';
import MovieInfo from '../../../../components/movie-info';

export interface IParams {
  params: { id: string };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
