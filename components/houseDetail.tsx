import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ComingSoon = () => {
  return (
    <Tabs>
      <h2 className="subtitle">ข้อมูลโครงการ</h2>
      {/* <div className="gap30px" /> */}
      <TabList>
        <Tab>รายละเอียด</Tab>
        <Tab>จุดเด่น</Tab>
        <Tab>สิ่งอำนวยความสะดวก</Tab>
      </TabList>

      <TabPanel>
        <div className="tab-details">
          <div>
            <img src="/img-detail.png" alt="Picture" />
          </div>
          <div>
            <div className="list">
              <div className="list--text-wrapper">พื้นที่โครงการ </div>
              <div>xx ไร่</div>
            </div>
            <div className="list">
              <div className="list--text-wrapper">ราคาเริ่มต้น</div>
              <div>x.xx ล้านบาท</div>
            </div>
            <div className="list">
              <div className="list--text-wrapper">พื้นที่ใช้สอย </div>
              <div>xx - xx ตร.ม</div>
            </div>
            <div className="list">
              <div className="list--text-wrapper">ประเภทโครงการ</div>
              <div>บ้านเดี่ยว</div>
            </div>
            <div className="list">
              <div className="list--text-wrapper">ประเภทยูนิต</div>
              <div>x - x ห้องนอน</div>
            </div>
            <div className="list">
              <div className="list--text-wrapper">จำนวนที่อยู่อาศัย</div>
              <div>xxx ยูนิต</div>
            </div>
            <div className="list">
              <div className="list--text-wrapper">จำนวนร้านค้า </div>
              <div>xx ยูนิต</div>
            </div>
            <div className="list">
              <div className="list--text-wrapper">จำนวนที่จอดรถ</div>{" "}
              <div>XX %</div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="tab-details">
          <div className="info">
            <div className="info--title">บ้าน Modern Tudor</div>
            <div className="info--des">
              Cotto โทนสีเขียวเทอร์คอย ตัดด้วยขอบหินแกรนิตสีเทาธรรมชาติ
              พร้อมระบบบำน้ำในตัว ผ่อนคลายสบายๆในสวนสไตล์ สุดร่มรื่น มาพร้อม
              FUNITURE BUILT-IN ครบทุกห้องที่ถูกออกแบบอย่างเป็นสัดส่วน
              ใส่ใจในรายละเอียดทุกมุม
              เพื่อให้ฟังค์ชั่นการใช้งานต่างๆเกิดประโยชน์สูงสุด
            </div>
          </div>
          <div>
            <img src="/img-detail2.png" alt="Picture" width="520" />
          </div>
        </div>
        <div className="tab-details">
          <div>
            <img src="/img-detail2.png" alt="Picture" width="520" />
          </div>
          <div className="info">
            <div className="info--title">ใกล้สิ่งอำนวยความสะดวก</div>
            <div className="info--des">
              ใกล้สิ่งอำนวยความสะดวกมากมาย เช่น สถานศึกษา ศูนย์ราชการ
              ห้างสรรพสินค้า โรงพยาบาล
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="tab-details">
          <div className="facility">
            <img src="/house.jpg" alt="Picture" width={940} />
            <div className="gap30px" />
            <div className="facility --item">
              <div className="area">1</div>
              <div className="area">2</div>
              <div className="area">3</div>
              <div className="area">4</div>
              <div className="area">5</div>
              <div className="area">6</div>
            </div>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default ComingSoon;
