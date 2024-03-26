const Button = ({ onClick, text }: { text: string; onClick: () => void }) => {
  return (
    <div className='p-2'>
      <button
        type='button'
        onClick={onClick}
        className='text-white bg-emerald-700 hover:bg-emerald-900  focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center  '
      >
        <div className='flex gap-2 items-center justify-center'>{text}</div>
      </button>
    </div>
  );
};

export default Button;
