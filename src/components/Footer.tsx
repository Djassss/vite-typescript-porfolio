import { faFacebook, faGithub, faTelegram} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon,  } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface Icons {
  id: number;
  icon: IconDefinition;
}


const socials: Icons[] = [
  {
    id: 1,
    icon: faFacebook
  },
  {
    id: 2,
    icon: faTelegram
  },
  {
    id: 3,
    icon: faGithub
  },
];



const Footer = () => {
  return (
    <>
      <footer>
        <div className="logo">
          <h1>JA&Co.</h1>
        </div>

        <div className="socials">
          {socials.map(({id, icon}) => (
            <FontAwesomeIcon
             className="icons"
             key={id} 
             icon={icon}
             />
          ))}
        </div>
      </footer>

    </>
  )
}

export default Footer