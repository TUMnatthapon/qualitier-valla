import Image from "next/image";
import { Fade } from "react-slideshow-image";

const slideImages = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/qualitier-valla.appspot.com/o/Qualitier-1.jpg?alt=media&token=4a47feb2-b08b-4953-9597-a2277902debf",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/qualitier-valla.appspot.com/o/Qualitier-2.jpg?alt=media&token=955eaf39-aca0-4fc9-bd90-7b1f2307f592",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/qualitier-valla.appspot.com/o/Qualitier-3.jpg?alt=media&token=148d5dc2-9410-4c9b-aa7b-f5522f9f1c4b",
  },
];

const ImageSlider = () => {
  return (
    <div className="slide-container">
      <Fade>
        {slideImages.map((slideImage, index) => (
          <div className="each-fade" key={index}>
            <Image
              src={slideImage.url}
              alt="Slide Image"
              width="100%"
              height="47%"
              layout="responsive"
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default ImageSlider;
