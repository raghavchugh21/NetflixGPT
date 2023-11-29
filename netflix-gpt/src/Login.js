import { useEffect, useState } from 'react';
import './App.css';

function Login() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(()=>{
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <div className="Login flex h-screen w-screen justify-center items-center">

      <div className="login-banner h-screen w-screen brightness-50 absolute top-0 -z-10"></div>
      <div className="header w-screen absolute top-0">
        <a className="logo block h-[55px] w-[220px] relative top-5 left-8" href="/"></a>
      </div>

      <div className="flex flex-col justify-center h-[600px] w-[450px] px-[68px] py-[70px] bg-black bg-opacity-60 rounded-2xl">
        
        <text className="h-[50px] text-4xl text-white">Sign In</text>
        <input className="h-[50px] rounded-md my-5 placeholder-2" type="email" id="email" name="email" placeholder="Email" required />
        <input className="h-[50px] rounded-md mb-10" type="password" id="password" name="password" placeholder="Password" required />
        <button className="h-[50px] rounded-md bg-nflix-red text-white mb-3" type="submit">Sign In</button>
        
        <div className="flex w-full">
          <label className="text-gray-400 text-sm" for="remember">
            <input className="mr-2" type="checkbox" id="remember" name="remember"/>
            <span>Remember me</span>
          </label>
          <a href="/login-help" className="text-gray-400 text-sm ml-auto" for="remember">
            Need help?
          </a>
        </div>

        <div className="mt-auto w-full">
        <span className="text-gray-400 text-sm mr-3" for="remember">
          New to Netflix?
        </span>
        <a href="/signup" className="text-white text-sm" for="remember">
          Sign Up now.
        </a>
        </div>

      </div>

    </div>
  );
}

export default Login;
