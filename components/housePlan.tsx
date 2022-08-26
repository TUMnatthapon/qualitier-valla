import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
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
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default housePlan;
