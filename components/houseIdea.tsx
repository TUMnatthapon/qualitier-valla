import Image from "next/image";

const Idea = () => {
  return (
    <>
      <div className="houseIdea">
        <h1>แนวคิดโครงการ</h1>
        <h2>
          ความหวัง และความสุข หลีกหนีจากความวุ่นวาย กับโครงการบ้านที่สร้างคุณภาพชีวิตให้สมบูรณ์แบบ
        </h2>

        <div className="houseIdea--img-wrapper">
          <Image
            src="/house.jpg"
            alt="Picture of the author"
            width={940}
            height={560}
          />
        </div>
        <div className="houseIdea--des">
          พื้นแห่งสุข…ที่ลงตัว QUALITIER QUALITY HOUSE บ้านเดี่ยวสไตล์ Modern
          Tudor มอบความสุขแก่ผู้อยู่อาศัยอย่างแท้จริงเพียง 24 ครอบครัว
          ทุกพื้นที่ของควอลิเทีย ออกแบบด้วยความเข้าใจในการใช้ชีวิตของทุกคน
          และใส่ใจในทุกรายละเอียด ความต้องการที่หลากหลาย
          ที่เน้นความสุขและการพัฒนาชีวิตที่ดีที่สุดกับ Quality ทั้ง 4
          ด้านที่มอบให้ Quality Life ชีวิตคุณภาพที่ลงตัว กับ Quality Design
          ที่ออกแบบมาเพื่อตอบโจทย์ไลฟ์สไตล์ในตัวคุณ พร้อมความสุขในการใช้ชีวิตกับ
          Quality Community ในสังคมที่โอบล้อมคุณด้วยธรรมชาติ เพราะเราได้เลือก
          Quality Location ให้ทุกการใช้ชีวิตของคุณสะดวกและเรียบง่ายที่สุด
        </div>
      </div>
    </>
  );
};

export default Idea;
