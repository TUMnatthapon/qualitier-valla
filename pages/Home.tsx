import Slide from "../components/Slide";
import Location from "../components/Location";

const Home = () => {
  return (
    <>
      <Slide />
      <div>
        <div className="quality">
          <h1 className="title">ควอลิเทีย Quality Living</h1>
          <h2 className="subtitle">
            เมื่อความหวังและความสุขมาบรรจบกัน
            พื้นที่ที่พร้อมให้คุณมีความสุขกับการใช้ชีวิต
          </h2>
          <div className="des">
            สถานที่แห่งความหวังและความสุข ที่จะช่วยสร้างคุณภาพชีวิตเพื่อให้บ้าน
            “เป็นบ้านที่สมบูรณ์”
            <div>#Qualitier #QualitierQualityLife #Qualityhouse</div>
          </div>
        </div>
        <hr />
      </div>
      <Location />
    </>
  );
};

export default Home;
