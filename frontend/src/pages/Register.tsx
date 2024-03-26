import { Suspense, useState } from 'react';
import Loading from '../components/Loading';
import Button from '../components/Button';
import Input from '../components/Input';

const Register = () => {
  const [registerdata, setRegisterData] = useState({
    username: '',
    email: '',
    phonenumber: '',
    password: '',
    repassword: '',
  });

  const setKeyValue = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <Suspense fallback={<Loading />}>
      <div className='bg-gray-50 p-5 flex items-center justify-center w-full h-screen'>
        <div className='w-full max-w-md'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 text-center mb-3'>
            Sign in to your account
          </h1>
          {JSON.stringify(registerdata)}
          <div>
            <Input
              label='User name'
              name='username'
              type='text'
              value={registerdata.username}
              onChange={setKeyValue}
              placeholder=''
            />
            <Input
              label='Email'
              name='email'
              type='text'
              value={registerdata.email}
              onChange={setKeyValue}
              placeholder=''
            />
            <Input
              label='Phonenumber'
              name='phonenumber'
              type='text'
              value={registerdata.phonenumber}
              onChange={setKeyValue}
              placeholder=''
            />
            <Input
              label='password'
              name='password'
              type='text'
              value={registerdata.password}
              onChange={setKeyValue}
              placeholder=''
            />
            <Input
              label='Re-Password'
              name='repassword'
              type='text'
              value={registerdata.repassword}
              onChange={setKeyValue}
              placeholder=''
            />

            <div className='flex justify-end'>
              <Button onClick={() => {}} text='Register' />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Register;
