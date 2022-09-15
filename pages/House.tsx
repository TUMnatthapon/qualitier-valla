import Image from "next/image";
import HouseIdea from "../components/houseIdea";
import HouseDetail from "../components/houseDetail";
import HousePlan from "../components/housePlan";
import Location from "../components/Location";

const House = () => {
  return (
    <div>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/qualitier-valla.appspot.com/o/Cover-Qualitier.jpg?alt=media&token=e2157c90-0e3e-4e23-be8a-93900a7802dd"
        alt="Slide Image"
        width="100%"
        height="45%"
        layout="responsive"
      />
      {/* <Form /> */}
      <HouseIdea />
      <HouseDetail />
      <HousePlan />
      <Location />
    </div>
  );
};

export default House;
