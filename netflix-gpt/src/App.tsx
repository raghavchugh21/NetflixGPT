import React from 'react';
import './App.css';

type HeaderProps = {
  isScrolled: boolean
};

function Header(props: React.PropsWithChildren<HeaderProps>){

  const {isScrolled} = props;

  return (
    <div className={`header w-screen fixed top-0 ${isScrolled ? 'scrolled' : ''}`}>
    <div className="flex items-center h-[70px] w-screen pl-10">
      <a className="logo block h-[30px] w-[120px] mr-8" href="/"></a>
      <div className="flex w-[530px] justify-between items-center text-sm text-med-white">
        <a href="/">Home</a>
        <a href="/shows">TV Shows</a>
        <a href="/movies">Movies</a>
        <a href="/new">New & Popular</a>
        <a href="/my-list">My List</a>
        <a href="/browse">Browse by Languages</a>
      </div>
      <div className="flex w-[210px] justify-between items-center text-sm text-med-white absolute right-[60px]">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="search-icon ltr-4z3qvp e1svuwfo1" data-name="MagnifyingGlass" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z" fill="currentColor"></path></svg>
        <a href="/Kids">Children</a>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="ltr-4z3qvp e1svuwfo1" data-name="Bell" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z" fill="currentColor"></path></svg>
        <div className="account-dropdown-button rounded-lg"><a href="/YourAccount" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Raghav – Account &amp; Settings"><span className="profile-link" role="presentation"><img className="profile-icon rounded-sm" src="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229" alt=""/></span></a><span className="caret" role="presentation"></span></div>
        <span className="caret" role="presentation"></span>
      </div>
    </div>
  </div>);
}

function App() {

  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  
  React.useEffect(()=>{
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <div className="App">
      <div className="banner h-screen w-screen absolute top-0 -z-10"></div>
      <Header isScrolled={isScrolled} />
    </div>
  );
}

export default App;
