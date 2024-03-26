const Input = ({
  label = 'label',
  name = 'label',
  type = 'text',
  value = '',
  onChange,
  placeholder = '',
}: any) => {
  return (
    <>
      <div className='p-2 w-full'>
        <label
          htmlFor='input'
          className='block mb-2 text-sm font-medium text-gray-900 '
        >
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className='bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-md focus:ring-emerald-900 focus:ring-2  focus:outline-none block w-full p-3  '
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
};

export default Input;
