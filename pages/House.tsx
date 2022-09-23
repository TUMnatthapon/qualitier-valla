import Image from "next/image";
import HouseIdea from "../components/houseIdea";
import HouseDetail from "../components/houseDetail";
import HousePlan from "../components/housePlan";
import Location from "../components/Location";

const House = () => {
  return (
    <div>
      <div className="hide-mobile">
        <Image
          src="/img-title2-desk.png"
          alt="Slide Image"
          width="100%"
          height="45%"
          layout="responsive"
        />
      </div>
      <div className="hide-desk">
        <Image
          src="/img-title2-mobile.png"
          alt="Slide Image"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </div>
      {/* <Form /> */}
      <HouseIdea />
      <HouseDetail />
      <HousePlan />
      <Location />
    </div>
  );
};

export default House;
