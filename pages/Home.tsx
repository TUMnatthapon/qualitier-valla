import Link from "next/link";
import Image from "next/image";
import HouseIdea from "../components/houseIdea";
import Location from "../components/Location";

const Home = () => {
  return (
    <>
      <Image
        src="/img-title1-desk.png"
        alt="Slide Image"
        width="100%"
        height="45%"
        layout="responsive"
      />
      <div className="qualitier">
        <h1 className="qualitier--title">ควอลิเทีย Quality Living</h1>
        <h2 className="qualitier--subtitle">
          เมื่อความหวังและความสุขมาบรรจบกัน
          พื้นที่ที่พร้อมให้คุณมีความสุขกับการใช้ชีวิต
        </h2>
        <div className="qualitier--des">
          สถานที่แห่งความหวังและความสุข ที่จะช่วยสร้างคุณภาพชีวิตเพื่อให้บ้าน
          “เป็นบ้านที่สมบูรณ์”
          <div>#Qualitier #QualitierQualityLife #Qualityhouse</div>
        </div>
        <div className="qualitier --img-wrapper hide-mobile">
          <Image src="/img-detail2.png" alt="Image" width="500" height="300" />
          <Image src="/house.jpg" alt="Image" width="500" height="300" />
        </div>
      </div>
      <hr />
      <HouseIdea />
      <div className="houseIdea">
        <Link href="/House">
          <div className="seemore">ดูรายละเอียดโครงการ</div>
        </Link>
      </div>
      <Location />
    </>
  );
};

export default Home;
