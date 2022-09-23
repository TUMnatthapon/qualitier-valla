import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MapsHomeWorkTwoToneIcon from "@mui/icons-material/MapsHomeWorkTwoTone";
import VillaTwoToneIcon from "@mui/icons-material/VillaTwoTone";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import SurroundSoundOutlinedIcon from "@mui/icons-material/SurroundSoundOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

const HouseDetail = () => {
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
          <div>
            <img src="/img-detail.png" alt="Picture" />
          </div>
          <div>
            <div className="list">
              <div className="list--title">ชื่อโครงการ </div>
              <div className="list--des">ควอลิเทีย Qualitier</div>
            </div>
            <div className="list">
              <div className="list--title">รูปแบบโครงการ</div>
              <div className="list--des">
                บ้านเดี่ยว 2 ชั้น สไตล์ English Modern Tudor
              </div>
            </div>
            <div className="list">
              <div className="list--title">พื้นที่โครงการ</div>
              <div className="list--des">4 ไร่ 1 งาน 64 ตารางวา</div>
            </div>
            <div className="list">
              <div className="list--title">ที่ตั้งโครงการ</div>
              <div className="list--des">
                หมู่ที่ 5 ตำบลหนองหาร อำเภอสันทราย จังหวัดเชียงใหม่ 50210{" "}
              </div>
            </div>
            <div className="list">
              <div className="list--title">จำนวนยูนิต</div>
              <div className="list--des">Modern Tudor House 24 ยูนิต</div>
            </div>
            <div className="list">
              <div className="list--title">ขนาดที่ดิน</div>
              <div className="list--des">เริ่มต้นที่ 50 ตารางวา</div>
            </div>
            <div className="list">
              <div className="list--title">ขนาดบ้าน</div>
              <div className="list--des">พื้นที่ใช้สอย 197.42 ตารางเมตร</div>
            </div>
            <div className="list">
              <div className="list--title">ราคาเริ่มต้น</div>
              <div className="list--des">4,590,000 บาท</div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          <div className="tab-details --reverse">
            <div>
              <img src="/house.jpg" alt="Picture" width="520" />
            </div>
            <div className="info">
              <MapsHomeWorkTwoToneIcon className="icon-material --size" />
              <div className="info--title">บ้าน Modern Tudor</div>
              <div className="info--des">
                Cotto โทนสีเขียวเทอร์คอย ตัดด้วยขอบหินแกรนิตสีเทาธรรมชาติ
                พร้อมระบบบำน้ำในตัว ผ่อนคลายสบายๆในสวนสไตล์ สุดร่มรื่น มาพร้อม
                FUNITURE BUILT-IN ครบทุกห้องที่ถูกออกแบบอย่างเป็นสัดส่วน
                ใส่ใจในรายละเอียดทุกมุม
                เพื่อให้ฟังค์ชั่นการใช้งานต่างๆเกิดประโยชน์สูงสุด
              </div>
            </div>
          </div>
          <hr className="hide-desk" />
          <div className="tab-details">
            <div>
              <img src="/img-detail2.png" alt="Picture" width="520" />
            </div>
            <div className="info">
              <VillaTwoToneIcon className="icon-material --size --wrapper" />
              <div className="info--title">ใกล้สิ่งอำนวยความสะดวก</div>
              <div className="info--des">
                ใกล้สิ่งอำนวยความสะดวกมากมาย เช่น สถานศึกษา ศูนย์ราชการ
                ห้างสรรพสินค้า โรงพยาบาล
              </div>
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
              <div className="facility --area">
                <CottageOutlinedIcon className="icon-material" />
                <span>Home Automation</span>
              </div>
              <div className="facility --area">
                <SurroundSoundOutlinedIcon className="icon-material" />
                <span>ลำโพงฝังเพดาน</span>
              </div>
              <div className="facility --area">
                <WarehouseOutlinedIcon className="icon-material" />
                <span>ประตูโรงรถอัตโนมัติ</span>
              </div>
              <div className="facility --area">
                <SensorDoorOutlinedIcon className="icon-material" />
                <span>ประตูทางเข้า Digital Door lock</span>
              </div>
              <div className="facility --area">
                <MeetingRoomOutlinedIcon className="icon-material" />
                <span>ประตูทางเข้า ( เล็ก ๆ ) </span>
              </div>
              <div className="facility --area">
                <img src="./icon-cctv.svg" width="25" />
                <span>กล้องวงจรปิด CCTV</span>
              </div>
              <div className="facility --area">
                <AdminPanelSettingsOutlinedIcon className="icon-material" />
                <span>ระบบรักษาความปลอดภัย 24 ชม.</span>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default HouseDetail;
