const MovieCard = ({ viewMovie, el }: any) => {
  return (
    <div
      className=' w-full max-w-md overflow-hidden rounded-lg  shadow-md'
      onClick={viewMovie}
    >
      <img
        className='w-full h-96 rounded-t-lg object-cover'
        src={el.imageurl}
        alt={el.name}
      />

      <div className='mt-4 px-5 pb-5'>
        <div className='flex justify-between items-center'>
          <div className='capitalize text-center md:text-start text-xl font-semibold tracking-tight text-slate-900'>
            {el.name}
          </div>
          {el.ratings && (
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
              <div className='font-semibold '>{el.ratings}</div>
            </div>
          )}
        </div>
        <div className='capitalize mt-2 font-normal text-gray-600 '>
          {el.genre.toString()}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
