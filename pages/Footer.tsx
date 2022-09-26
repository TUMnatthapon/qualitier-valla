import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleChevronRight,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="area-block hide-mobile">
          <div className="font-title">Qualitier Living</div>
          <a>
            {/* เมื่อความหวังและความสุขมาบรรจบกัน
            พื้นที่ที่พร้อมให้คุณมีความสุขกับการใช้ชีวิต */}
            สถานที่แห่งความหวังและความสุข ที่จะช่วยสร้างคุณภาพชีวิตเพื่อให้บ้าน
            “เป็นบ้านที่สมบูรณ์”
          </a>
        </div>
        <div>
          <div className="font-title">Contact Info</div>
          <div className="font-title--wrapper">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:063-007-5618">063-007-5618</a>
          </div>
          <div className="font-title--wrapper">
            <FontAwesomeIcon icon={faLine} size="lg" />
            <a
              href="https://line.me/ti/p/gANyvKWac4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Line ID : XXXX
            </a>
          </div>
          <div className="font-title--wrapper">
            <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
            <a
              href="https://www.facebook.com/Qualitier-Luxury-House-ควอลิเทีย-แม่โจ้-เชียงใหม่-102925705865264"
              target="_blank"
              rel="noopener noreferrer"
            >
              Qualitier Quality Living ควอลิเทีย แม่โจ้ เชียงใหม่
            </a>
          </div>
        </div>
        <div className="area-block">
          <div className="font-title">Quick Links</div>
          <ul className="wrapper-links">
            <div className="wrapper-links --item">
              <li>
                <Link href="/Home">
                  <a>
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                    <span>หน้าหลัก</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/Promotion">
                  <a>
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                    <span>โปรโมชั่น</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/About">
                  <a>
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                    <span>เกี่ยวกับเรา</span>
                  </a>
                </Link>
              </li>
            </div>
            <div className="wrapper-links --item">
              <li>
                <Link href="/House">
                  <a>
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                    <span>บ้าน</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/Service">
                  <a>
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                    <span>บริการ</span>
                  </a>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
