
import Image from 'next/image';
import Logo from '../../public/images/logo.png';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Nav = () => {
    return <>
    <header className="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2">
    <div className="flex-1 flex justify-between items-center">
      <a href="#">
      <Image
                    alt="HUNTER"
                    src={Logo}
                    sizes="100vw"
                    style={{
                      width: "50px",
                      height: "60px",
                    }}
                    className="rounded-lg"
                  />
    </a>
  </div>

   <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block"><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
  <input className="hidden" type="checkbox" id="menu-toggle" />

  <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
    <nav>
      <ul className="lg:flex items-center justify-between text-base text-white-700 pt-4 lg:pt-0">
        <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="#">Features</a></li>
        <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="#">Pricing</a></li>
        <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="#">Documentation</a></li>
        <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2" href="#">Support</a></li>
      </ul>
    </nav>
    <a href="#" className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
      <ConnectButton/>
    {/* <button className='bg-yellow-300 p-2 w-40 text-black rounded-lg m-3 '>Conect Wallet</button> */}
      {/* <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg" alt="Andy Leverenz"/> */}
    </a>

  </div>

  </header>
    </>
}

export default Nav;


