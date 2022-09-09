import Image from "next/image";
import HouseIdea from "../components/houseIdea";
import HouseDetail from "../components/houseDetail";
import HousePlan from "../components/housePlan";
import Location from "../components/Location";

const House = () => {
  return (
    <div>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/qualitier-valla.appspot.com/o/MIDxQualitier_010722-01.jpg?alt=media&token=b4aa24fb-6054-4e6e-9b94-403d5f41db0e"
        alt="Slide Image"
        width="100%"
        height="47%"
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
