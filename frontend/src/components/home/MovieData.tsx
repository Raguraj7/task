import { useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { getMovieData } from '../../redux/movie/action';

const MovieData = ({
  id,
  hideDialog,
}: {
  id: undefined | string;
  hideDialog: any;
}) => {
  const { moviedata, selectedId }: any = useAppSelector((state) => state.movie);
  useEffect(() => {
    if (id && id !== selectedId) {
      getMovieData(id);
    }
  }, [id, selectedId]);

  return (
    <>
      {moviedata ? (
        <>
          <div className=' grid grid-cols-1 gap-5'>
            <div className='max-w-4xl'>
              <img
                src={moviedata.imageurl}
                alt={moviedata.name}
                className='w-full h-96 object-cover'
              />
            </div>

            <div className='w-full  ml-6'>
              <div className=' capitalize font-bold text-gray-900 sm:text-3xl'>
                {moviedata.name}
              </div>
              <div className='capitalize text-lg font-normal text-gray-600  mt-3'>
                {moviedata.genre.toString()}
              </div>

              <div className='mt-5 flex flex-col gap-3'>
                <div className='flex gap-1'>
                  <div className='font-medium'>Duration</div>
                  <div className='font-medium'>-</div>
                  <div className='font-medium'>{moviedata.duration}</div>
                </div>

                <div className='capitalize bg-red-300 px-3 py-2 w-full max-w-xs border rounded-md'>
                  {moviedata.languages.toString()}
                </div>
                <div className='flex gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    className='w-6 h-6 fill-green-500 stroke-green-500'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                    />
                  </svg>

                  <div className='font-semibold '>{moviedata.ratings}</div>
                </div>
              </div>

              <div className='mt-10'>
                <div className='font-medium text-gray-900 text-xl'>
                  About the Movie :
                </div>
                <div>{moviedata.description}</div>
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <div
              className='inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:cursor-pointer  '
              onClick={hideDialog}
            >
              Cancel
            </div>
          </div>
        </>
      ) : (
        <div>Movie Not Found</div>
      )}
    </>
  );
};

export default MovieData;
