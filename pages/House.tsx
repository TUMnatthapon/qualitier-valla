import Slide from "../components/Slide";
/* import Form from "../components/Form"; */
import HouseIdea from "../components/houseIdea";
import HouseDetail from "../components/houseDetail";
import HousePlan from "../components/housePlan";
import Location from "../components/Location";

const House = () => {
  return (
    <div>
      <Slide />
      {/* <Form /> */}
      <HouseIdea />
      <HouseDetail />
      <HousePlan />
      <Location />
    </div>
  );
};

export default House;
