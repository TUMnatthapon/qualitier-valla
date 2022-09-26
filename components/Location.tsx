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
            <div>12.5 KM</div>
          </div>
          <div>เซ็นทรัล เฟสติวัล</div>
        </div>
        <div>
          <div className="round">
            <div>8.8 KM</div>
          </div>
          <div>กาดรวมโชค</div>
        </div>
        <div>
          <div className="round">
            <div>14.8 KM</div>
          </div>
          <div>ริมปิงซุปเปอร์มาร์เก็ต</div>
        </div>
        <div>
          <div className="round">
            <div>14.7 KM</div>
          </div>
          <div>โรงพยาบาลกรุงเทพ</div>
        </div>
        <div>
          <div className="round">
            <div>15.6 KM</div>
          </div>
          <div>ศูนย์ราชการ</div>
        </div>
        <div>
          <div className="round">
            <div>1.7 KM</div>
          </div>
          <div>มหาวิทยาลัยแม่โจ้</div>
        </div>
        <div>
          <div className="round">
            <div>17.8 KM</div>
          </div>
          <div>มหาวิทยาลัยเชียงใหม่</div>
        </div>
        <div>
          <div className="round">
            <div>16.3 KM</div>
          </div>
          <div>ถนนนิมมานเหมินทร์</div>
        </div>
      </div>
      <hr />
      <div>
        <div className="location --map">
          <div className="btn btn-map">
            <Link href="https://firebasestorage.googleapis.com/v0/b/qualitier-valla.appspot.com/o/Map.jpg?alt=media&token=827257f6-468f-469c-8a17-5056cad1f346">
              <a target="_blank">แผนที่ภาพ</a>
            </Link>
          </div>
          <div className="btn btn-map">
            <Link href="https://www.google.com/maps/dir/7.9085109,98.3417014/18.8864444,99.0174722/@13.3697984,94.9367647,6z/data=!3m1!4b1">
              <a target="_blank">ขอเส้นทาง</a>
            </Link>
          </div>
        </div>
        <iframe
          style={{ border: 0, marginBottom:-8 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2196.5394005014023!2d99.0166202032996!3d18.88641906000045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6153af36b873bec6!2zMTjCsDUzJzExLjIiTiA5OcKwMDEnMDIuOSJF!5e0!3m2!1sth!2sth!4v1661754650955!5m2!1sth!2sth"
          width="100%"
          height="400"
        />
      </div>
    </>
  );
};

export default Location;
