import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faFacebookMessenger,faLine } from '@fortawesome/free-brands-svg-icons';

const Social = () => {
  return (
    <div className="social">
      <li className="social--wrapper">
        <a href="https://www.facebook.com/Qualitier-Luxury-House-ควอลิเทีย-แม่โจ้-เชียงใหม่-102925705865264" target="_blank" rel="noopener noreferrer" className="bouncy --background-item ">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>

      <li className="social--wrapper">
        <a href="https://www.m.me/102925705865264" target="_blank" rel="noopener noreferrer" className="bouncy --background-item ">
          <FontAwesomeIcon icon={faFacebookMessenger} />
        </a>
      </li>

      <li className="social--wrapper">
        <a href="https://line.me/ti/p/gANyvKWac4" target="_blank" rel="noopener noreferrer" className="bouncy --background-item ">
          <FontAwesomeIcon icon={faLine} />
        </a>
      </li>
    </div>
  );
};

export default Social;
