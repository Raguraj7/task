import { Suspense, lazy, useEffect, useState } from 'react';
import { useAppSelector } from '../redux/hooks';
import { getMovieList } from '../redux/movie/action';
import Loading from '../components/Loading';
import ErrorBoundary from '../components/ErrorBoundary';
import { useNavigate } from 'react-router-dom';
const MovieCard = lazy(() => import('../components/home/MovieCard'));
const MovieData = lazy(() => import('../components/home/MovieData'));
const RDialog = lazy(() => import('../components/dialog/RDialog'));

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    getMovieList();
  }, []);

  const [dialogstate, setDialogtate] = useState(false);

  const [id, setId] = useState<undefined | string>(undefined);
  const viewMovie = (id: string) => {
    setId(id);
    setDialogtate(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  const { list } = useAppSelector((state) => state.movie);

  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <div>
          <div
            className='flex justify-end items-center px-10 py-5 hover:cursor-pointer font-medium hover:text-blue-500 underline hover:decoration-blue-500'
            onClick={logout}
          >
            Logout
          </div>

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
            content={
              <MovieData id={id} hideDialog={() => setDialogtate(false)} />
            }
            closeModal={() => setDialogtate(false)}
          />
        </div>
      </ErrorBoundary>
    </Suspense>
  );
};

export default Home;
