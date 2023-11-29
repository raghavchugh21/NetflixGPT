import React from "react";

function Auth() {

  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <div className="flex h-screen w-screen justify-center items-center">

      <div className="auth-banner h-screen w-screen brightness-50 absolute top-0 -z-10"></div>
      <div className="header w-screen absolute top-0">
        <a className="logo block h-[55px] w-[220px] relative top-5 left-8" href="/"></a>
      </div>

      <div className="flex flex-col justify-center h-[600px] w-[450px] px-[68px] py-[70px] bg-black bg-opacity-60 rounded-2xl">
        
        <span className="h-[50px] text-4xl text-white mb-5">{isLogin ? "Sign In" : "Sign Up"}</span>

        {!isLogin && <input className="h-[50px] rounded-md mb-5 bg-gray-300 pl-2" type="text" id="name" placeholder="Name" required />}
        <input className="h-[50px] rounded-md mb-5 bg-gray-300 pl-2" type="email" id="email" placeholder="Email" required />
        <input className="h-[50px] rounded-md mb-5 bg-gray-300 pl-2" type="password" id="password" placeholder="Password" required />
        {!isLogin && <input className="h-[50px] rounded-md mb-10 bg-gray-300 pl-2" type="password" id="confirm-password" placeholder="Confirm password" required />}

        <button className="h-[50px] rounded-md bg-nflix-red text-white mb-3" type="submit">{isLogin ? "Sign In" : "Sign Up"}</button>
        
        { 
          isLogin &&
          <div className="flex w-full">
            <input className="mr-2" type="checkbox" id="remember" name="remember"/>
            <label className="text-gray-400 text-sm" htmlFor="remember">
              Remember me
            </label>
            <a href="/login-help" className="text-gray-400 text-sm ml-auto">
              Need help?
            </a>
          </div> 
        }

        <div className="mt-auto w-full">
        { 
          isLogin ? 
          <>
            <span className="text-gray-400 text-sm mr-3">New to Netflix?</span>
            <a onClick={() => {setIsLogin(false);}} className="text-white text-sm hover:cursor-pointer">Sign Up now.</a>
          </>
          :
          <>
            <span className="text-gray-400 text-sm mr-3">Already a user?</span>
            <a onClick={() => {setIsLogin(true);}} className="text-white text-sm hover:cursor-pointer">Log In here.</a>
          </>
        }
        </div>

      </div>

    </div>
  );
}

export default Auth;
