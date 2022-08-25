import HouseIdea from "../components/houseIdea"
import HouseDetail from "../components/houseDetail";
import HousePlan from "../components/housePlan";
import Location from "../components/Location";
import Slide from "../components/Slide"

const House = () => {
  return (
    <div>
      <Slide />
      <HouseIdea />
      <HouseDetail />
      <HousePlan />
      <Location />
    </div>
  );
};

export default House;
