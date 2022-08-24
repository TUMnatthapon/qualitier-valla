import Link from "next/link";

const Location = () => {
  return (
    <>
      <div className="location">
        <div className="inner"></div>
        <h2>ทำเลที่ตั้ง</h2>
        <div className="des">
          โครงการตั้งอยู่บนถนนวงแหวนรอบนอก
          สายหลักของการเดินทางเข้าออกเมืองเชียงใหม่
          รายล้อมด้วยสิ่งอำนวยความสะดวก ที่ครบครัน พร้อมให้คุณใช้ชีว้ต ได้ทุกวัน
          ใช้เวลาเพียง 15 นาทีก็เข้าถึงใจกลางคูเมืองเชียงใหม่ได้ ชีวิตสะดวกสบาย
        </div>
      </div>
      <div className="location --landmark">
        <div>
          <div className="round">
            <div>X.XX KM</div>
          </div>
          <div>เซ็นทรัล เฟสติวัล</div>
        </div>
        <div>
          <div className="round">
            <div>X.XX KM</div>
          </div>
          <div>กาดรวมโชค</div>
        </div>
        <div>
          <div className="round">
            <div>X.XX KM</div>
          </div>
          <div>ริมปิงซุปเปอร์มาร์เก็ต</div>
        </div>
        <div>
          <div className="round">
            <div>X.XX KM</div>
          </div>
          <div>โรงพยาบาลกรุงเทพ</div>
        </div>
        <div>
          <div className="round">
            <div>X.XX KM</div>
          </div>
          <div>ศูนย์ราชการ</div>
        </div>
        <div>
          <div className="round">
            <div>X.XX KM</div>
          </div>
          <div>มหาวิทยาลัยแม่โจ้</div>
        </div>
        <div>
          <div className="round">
            <div>X.XX KM</div>
          </div>
          <div>มหาวิทยาลัยเชียงใหม่</div>
        </div>
        <div>
          <div className="round">
            <div>X.XX KM</div>
          </div>
          <div>ถนนนิมมานเหมินทร์</div>
        </div>
      </div>
      <hr />
      <div>
        <div className="location --map">
          <div className="btn btn-map">
            <Link href="#">แผนที่ภาพ</Link>
          </div>
          <div className="btn btn-map">
            <Link href="#">ขอเส้นทาง</Link>
          </div>
        </div>
        <iframe
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.7811593023325!2d98.33361038339467!3d7.917913507579298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031efb00b9853%3A0xe7ed5ca6326494cf!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4m-C4geC4tOC4leC5ieC4siDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1659510634704!5m2!1sth!2sth"
          width="100%"
          height="400"
        />
      </div>
    </>
  );
};

export default Location;
