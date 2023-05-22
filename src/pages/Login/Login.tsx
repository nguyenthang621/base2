import { Link } from "react-router-dom"

function Login() {
  return (
      <div className='flex min-h-screen w-full flex-col justify-center bg-gray-100 py-6 sm:py-12'>
        <div className='relative py-3 sm:mx-auto sm:max-w-xl  sm:min-w-[560px]'>
          <div className='absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl'></div>
          <div className='relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20'>
            <div className='mx-auto max-w-md'>
              <div>
                <h1 className='text-2xl font-semibold'>Đăng nhập</h1>
              </div>
              <div className='divide-y divide-gray-200'>
                <div className='py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7'>
                  <div className='relative'>
                    <input
                      autoComplete='off'
                      id='email'
                      name='email'
                      type='text'
                      className='focus:borer-rose-600 peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none'
                      placeholder='Email'
                    />
                    <label
                      htmlFor='email'
                      className='peer-placeholder-shown:text-gray-440 absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600'
                    >
                      Email
                    </label>
                  </div>
                  <div className='relative mt-8'>
                    <input
                      autoComplete='off'
                      id='password'
                      name='password'
                      type='password'
                      className='focus:borer-rose-600 peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none'
                      placeholder='Password'
                    />
                    <label
                      htmlFor='password'
                      className='peer-placeholder-shown:text-gray-440 absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600'
                    >
                      Password
                    </label>
                  </div>
                  <div className='relative flex items-center justify-center mt-12'>
                    <button className='outline-none rounded-md bg-blue-500 w-full py-2 text-white hover:bg-blue-500/90'>Submit</button>
                  </div>
                <div className='mt-2 flex items-center justify-center text-center text-sm'>
                  <div className='text-slate-400'>Bạn chưa có tài khoản?</div>
                  <Link to={'/register'} className='ml-1 text-blue-600'>
                    Đăng kí
                  </Link>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login
