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
          รายล้อมด้วยสิ่งอำนวยความสะดวก ที่ครบครัน พร้อมให้คุณใช้ชีวิต ได้ทุกวัน
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
            <Link href="https://firebasestorage.googleapis.com/v0/b/qualitier-valla.appspot.com/o/Qualitier-3.jpg?alt=media&token=148d5dc2-9410-4c9b-aa7b-f5522f9f1c4b">
              <a target="_blank">แผนที่ภาพ</a>
            </Link>
          </div>
          <div className="btn btn-map">
            <Link href="https://www.google.com/maps/dir//%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97+%E0%B8%9B%E0%B8%81%E0%B8%B4%E0%B8%95%E0%B9%89%E0%B8%B2+%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94+142+%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5+%E0%B8%81%E0%B8%B0%E0%B8%97%E0%B8%B9%E0%B9%89+%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B8%81%E0%B8%B0%E0%B8%97%E0%B8%B9%E0%B9%89+%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%95+83120/@7.9179082,98.335327,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x305031efb00b9853:0xe7ed5ca6326494cf!2m2!1d98.335327!2d7.9179082">
              <a target="_blank">ขอเส้นทาง</a>
            </Link>
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
