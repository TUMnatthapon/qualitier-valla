import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ComingSoon = () => {
  return (
    <Tabs>
      <h2>ข้อมูลโครงการ</h2>
      <TabList>
        <Tab>รายละเอียด</Tab>
        <Tab>จุดเด่น</Tab>
        <Tab>สิ่งอำนวยความสะดวก</Tab>
      </TabList>

      <TabPanel>
        <div className="tab-details">
          <div>Image</div>
          <div>
            <div className="tab-details--item">
              <div className="font-wrapper">พื้นที่โครงการ </div>{" "}
              <div>xx ไร่</div>
            </div>
            <div className="tab-details--item">
              <div className="font-wrapper">ราคาเริ่มต้น</div>{" "}
              <div>x.xx ล้านบาท</div>
            </div>
            <div className="tab-details--item">
              <div className="font-wrapper">พื้นที่ใช้สอย </div>
              <div>xx - xx ตร.ม</div>
            </div>
            <div className="tab-details--item">
              <div className="font-wrapper">ประเภทโครงการ</div>
              <div>บ้านเดี่ยว</div>
            </div>
            <div className="tab-details--item">
              <div className="font-wrapper">ประเภทยูนิต</div>
              <div>x - x ห้องนอน</div>
            </div>
            <div className="tab-details--item">
              <div className="font-wrapper">จำนวนที่อยู่อาศัย</div>
              <div>xxx ยูนิต</div>
            </div>
            <div className="tab-details--item">
              <div className="font-wrapper">จำนวนร้านค้า </div>
              <div>xx ยูนิต</div>
            </div>
            <div className="tab-details--item">
              <div className="font-wrapper">จำนวนที่จอดรถ</div> <div>XX %</div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="tab-details">
          <div>Image</div>
          <div className="tab-details--item">
            <div>อธิบาย </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          <div>Image</div>
          <div>อธิบาย </div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default ComingSoon;
