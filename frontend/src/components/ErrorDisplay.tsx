const ErrorDisplay = ({
  message,
  clearError,
}: {
  message: string;
  clearError: any;
}) => {
  return (
    <div className='p-2 bg-red-200   border rounded-md font-medium flex justify-between'>
      {message && message}
      <div className=''>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          className='w-6 h-6  hover:rounded-full hover:stroke-red-700 stroke-black'
          onClick={clearError}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18 18 6M6 6l12 12'
          />
        </svg>
      </div>
    </div>
  );
};

export default ErrorDisplay;
