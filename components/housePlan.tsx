import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import CountertopsOutlinedIcon from "@mui/icons-material/CountertopsOutlined";
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";

const housePlan = () => {
  return (
    <div className="plan">
      <Tabs>
        <h2 className="subtitle">แบบแปลน</h2>
        <TabList>
          <Tab>Master Plan</Tab>
          <Tab>Floor Plan</Tab>
        </TabList>

        <TabPanel>
          <div className="plan--area">
            <img src="/master-plan.jpg" alt="Picture" />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="plan--area">
            <img src="/floor-plan-1.jpg" alt="Picture" />
          </div>
          <div className="plan--area">
            <div className="des">
              <div className="des --area">
                <BedOutlinedIcon className="icon-material" />
                <span>3 ห้องนอน</span>
              </div>
              <div className="des --area">
                <BathroomOutlinedIcon className="icon-material" />
                <span>3 ห้องน้ำ</span>
              </div>
              <div className="des --area">
                <CountertopsOutlinedIcon className="icon-material" />
                <span>2 ห้องครัว</span>
              </div>
              <div className="des --area">
                <TableRestaurantOutlinedIcon className="icon-material" />
                <span>พื้นที่ห้องรับประทานอาหาร</span>
              </div>
              <div className="des --area">
                <ChairOutlinedIcon className="icon-material" />
                <span>พื้นที่ห้องรับแขก</span>
              </div>
              <div className="des --area">
                <WarehouseOutlinedIcon className="icon-material" />
                <span>พื้นที่จอดรถ 2 คัน</span>
              </div>
              <div className="des --area">
                <YardOutlinedIcon className="icon-material" />
                <span>สวนรอบบ้าน</span>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default housePlan;
