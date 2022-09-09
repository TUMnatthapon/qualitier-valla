import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MapsHomeWorkTwoToneIcon from "@mui/icons-material/MapsHomeWorkTwoTone";
import VillaTwoToneIcon from "@mui/icons-material/VillaTwoTone";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import DoorBackOutlinedIcon from "@mui/icons-material/DoorBackOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import CurtainsOutlinedIcon from "@mui/icons-material/CurtainsOutlined";
import SurroundSoundOutlinedIcon from "@mui/icons-material/SurroundSoundOutlined";
import DomainAddOutlinedIcon from "@mui/icons-material/DomainAddOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

const HouseDetail = () => {
  return (
    <Tabs>
      <h2 >ข้อมูลโครงการ</h2>
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
              <div className="list--text-wrapper">ชื่อโครงการ </div>
              <div>ควอลิเทียร์ Qualitier</div>
            </div>
            <div className="list">
              <div className="list--text-wrapper">รูปแบบโครงการ</div>
              <div>บ้านเดี่ยว Luxury</div>
            </div>
            <div className="list">
              <div className="list--text-wrapper">ที่ตั้งโครงการ</div>
              <div>ตำบลป่าไผ่ อำเภอสันทราย จังหวัดเชียงใหม่ 50210</div>
            </div>
            <div className="list">
              <div className="list--text-wrapper">พื้นที่โครงการ</div>
              <div>4 ไร่ 1 งาน 64 ตารางวา</div>
            </div>
            <div className="list">
              <div className="list--text-wrapper">จำนวนยูนิต</div>
              <div>24 ยูนิต</div>
            </div>
            <div className="list">
              <div className="list--text-wrapper">ขนาดที่ดิน</div>
              <div>เริ่มต้น 50 ตารางวา</div>
            </div>
            <div className="list">
              <div className="list--text-wrapper">พื้นที่ใช้สอย</div>
              <div>199.69 ตารางเมตร</div>
            </div>
            <div className="list">
              <div className="list--text-wrapper">ราคาเริ่มต้น</div>
              <div>3.9 ล้านบาท</div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          <div className="tab-details --reverse">
            <div>
              <img src="/img-detail2.png" alt="Picture" width="520" />
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
                <WarehouseOutlinedIcon className="icon-material" />
                <span>ประตูโรงรถอัตโนมัติ</span>
              </div>
              <div className="facility --area">
                <DoorBackOutlinedIcon className="icon-material" />
                <span>ประตูทางเข้า Digital Door lock</span>
              </div>
              <div className="facility --area">
                <ChairOutlinedIcon className="icon-material" />
                <span>ชุดโซฟา</span>
              </div>
              <div className="facility --area">
                <BathtubOutlinedIcon className="icon-material" />
                <span>อ่างแช่น้ำ</span>
              </div>
              <div className="facility --area">
                <BathroomOutlinedIcon className="icon-material" />
                <span>ระบบน้ำร้อนในตัวทุกห้องน้ำ</span>
              </div>
              <div className="facility --area">
                <CurtainsOutlinedIcon className="icon-material" />
                <span>ผ้าม่าน 2 ชั้น</span>
              </div>
              <div className="facility --area">
                <SurroundSoundOutlinedIcon className="icon-material" />
                <span>ลำโพงฝังเพดาน</span>
              </div>
              <div className="facility --area">
                <DomainAddOutlinedIcon className="icon-material" />
                <span>เครื่องบิ้วทั้งหลัง</span>
              </div>
              <div className="facility --area">
                <img src="./icon-cctv.svg" width="25" />
                <span>กล้อง CCTV</span>
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
