import { Link } from 'react-router-dom'
import movie from '../pics/coding.mp4'
import arrowBlack from '../pics/arrowBlack.png'
import { useState } from 'react';
import scroll from '../pics/arrow.png'
import Slides from '../components/Slides';

type MyProject = {
  id: number;
  title: string;
  classname: string;
  to: string;
  text: string;
}

type HomeProps = {
  isCallapse: boolean; 
  showScroll: boolean;
  setShowScroll: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCallapse: React.Dispatch<React.SetStateAction<boolean>>;
};

const myLinks: MyProject[] = [
  {
    id: 1,
    title: 'List-songs',
    classname: 'song',
    to: 'https://djassss.github.io/typescript-songs/',
    text: 'I build in React-Typescript my list-songs'
  },
  {
    id: 2,
    title: 'Todo',
    classname: 'todo',
    to: 'https://djassss.github.io/react-todo-platform/',
    text: 'Todo-list task u can add to the card  you can see just click button'
  },
  {
    id: 3,
    title: 'Form',
    classname: 'form-github',
    to: 'https://djassss.github.io/React-Form/',
    text: 'Validation form User `Inputs email, number`'
  },
]

const Home = ({ isCallapse, showScroll }: HomeProps) => {
  const [cards, setCards] = useState<{ [key: number]: boolean }>({
    1: false,
    2: true,
    3: true,
  });

  const toggleCard = (id: number) => {
    setCards(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="home">
          <video src={movie} loop muted autoPlay autoFocus={false}></video>
          <h1 id='man'>
          Coding makes you smart
          </h1>
          <Link
          className='github'
           to={'https://github.com/Djassss?tab=repositories'}>
            Github
          </Link>

         
      </div>
      <section>
            <h1>#CodeProject</h1>
            <div className='my-links'>
              {myLinks.map(({ id, classname, title, to, text }) => (
                <div className={classname} key={id}>
                  <div className={`block-close ${!cards[id] ? 'block-open' : ''}`}>
                    <img
                      onClick={() => toggleCard(id)}
                      className={`isOpen ${cards[id] ? 'open' : ''}`}
                      src={arrowBlack}/>
                    {cards[id] && title}
                   {!cards[id] && 
                   <div className='mylink'>
                      <p>{text}</p>
                     <Link to={to}>{title}</Link>
                    </div>
                   }
                  </div>
                  
                </div>
              ))}
            </div>
      </section>

        {showScroll && !isCallapse && <img 
        className='scroll'
        src={scroll} onClick={scrollToTop}/>}

        <Slides />
    </>
  )
}

export default Home