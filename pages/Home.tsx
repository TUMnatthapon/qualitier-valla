import Link from "next/link";
import Image from "next/image";
import HouseIdea from "../components/houseIdea";
import Location from "../components/Location";

const Home = () => {
  return (
    <>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/qualitier-valla.appspot.com/o/Qualitier-1.jpg?alt=media&token=4a47feb2-b08b-4953-9597-a2277902debf"
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
