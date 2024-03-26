import { Suspense, lazy, useEffect, useState } from 'react';
import { useAppSelector } from '../redux/hooks';
import { getMovieList } from '../redux/movie/action';
import Loading from '../components/Loading';
import { RDialog } from '../components/dialog/RDialog';
import MovieData from '../components/home/MovieData';
const MovieCard = lazy(() => import('../components/home/MovieCard'));

const Home = () => {
  useEffect(() => {
    getMovieList();
  }, []);

  const [dialogstate, setDialogtate] = useState(false);

  const [id, setId] = useState<undefined | string>(undefined);
  const viewMovie = (id: string) => {
    setId(id);
    setDialogtate(true);
  };

  const { list } = useAppSelector((state) => state.movie);
  return (
    <Suspense fallback={<Loading />}>
      <div className=' px-10 py-5 w-full h-screen select-none '>
        {list && list.length > 0 ? (
          <>
            <div className='font-bold text-xl font-sans'>
              Recommended Movies
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 mt-3 hover:cursor-pointer'>
              {list.map((el: any, i: number) => (
                <MovieCard
                  el={el}
                  key={i.toString()}
                  viewMovie={() => viewMovie(el.id)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className='flex items-center justify-center w-full h-screen font-bold text-2xl'>
            No Data Found...
          </div>
        )}
      </div>
      <RDialog
        modalState={dialogstate}
        content={<MovieData id={id} hideDialog={() => setDialogtate(false)} />}
        closeModal={() => setDialogtate(false)}
      />
    </Suspense>
  );
};

export default Home;
