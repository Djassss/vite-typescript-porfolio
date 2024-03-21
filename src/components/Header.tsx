import { Link } from "react-router-dom";
import bars from '../pics/menu.png'
import xMark from '../pics/closeWhite.png'

type links = {
  id: number;
  title: string;
  to: string;
  hashlink: string;
}

type HeaderProps = {
  isCallapse: boolean; 
  setIsCallapse: React.Dispatch<React.SetStateAction<boolean>>;
};

const nav: links[] = [
  {
    id: 1,
    title: 'Home',
    to: '/',
    hashlink: 'home'
  },
  {
    id: 2,
    title: 'Contact',
    to: 'contact',
    hashlink: 'contact'
  },
  {
    id: 3,
    title: 'About',
    to: 'about',
    hashlink: 'about'
  },
]


const Header = ({ isCallapse, setIsCallapse}: HeaderProps ) => {

  return (
    <>
      <header id="header">
        <div className="logo">
          <h1>JA&Co.</h1>
        </div>
        
        <div className="navbar">
          {nav.map(({id, to, title, hashlink}) => 
            <li key={id}>
              <Link to={to} id={hashlink}>{title}</Link>
            </li>
          )}
        </div>

        <div className="navbar-media">
        {!isCallapse  && <img src={bars}
            onClick={() => setIsCallapse(!isCallapse)}
          />}
        </div>
        
       <div className={`callapse ${!isCallapse ? 'close' : ''}`}>
         {isCallapse && nav.map(({id, to, title}) => 
            <li  key={id}>
              <Link to={to}>{title}</Link>
            </li>
          )}
          {isCallapse && <img className="xMark" onClick={() => setIsCallapse(!isCallapse)} src={xMark}/>}
        </div> 
      </header>
    </>
  )
}

export default Header