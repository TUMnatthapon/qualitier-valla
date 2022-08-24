import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faFacebookMessenger,faLine } from '@fortawesome/free-brands-svg-icons';

const Social = () => {
  return (
    <div className="social">
      <li className="social--wrapper">
        <a href="#" className="bouncy --background-item ">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>

      <li className="social--wrapper">
        <a href="#" className="bouncy --background-item ">
          <FontAwesomeIcon icon={faFacebookMessenger} />
        </a>
      </li>

      <li className="social--wrapper">
        <a href="#" className="bouncy --background-item ">
          <FontAwesomeIcon icon={faLine} />
        </a>
      </li>
    </div>
  );
};

export default Social;
