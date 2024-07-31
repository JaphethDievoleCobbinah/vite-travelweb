import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/zanzibar.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/blog1.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Zanzibar Package",
    location: "Zanzibar",
    description: "Includes Hotel Accommodation B&B for 5 Nights  - Ocean Paradise Resort, Return flights Accra-Zanzibar-Accra, Stone Town Tour with Prison Island Visit, Dolphin Tour and Mnemba Island for snorkeling, Nungwi Aquarium and Sunset Dhow Cruise, Airport Transfer, Excludes: All Taxes Exclusive of the Government's Infrastructure Fee, Tips & anything not mentioned above",
    price: 1995,
    type: "per person",
  },
  {
    img: Img1,
    title: "Zanzibar Package",
    location: "Zanzibar",
    description: "Includes Hotel Accommodation B&B for 5 Nights  - Ocean Paradise Resort, Return flights Accra-Zanzibar-Accra, Stone Town Tour with Prison Island Visit, Dolphin Tour and Mnemba Island for snorkeling, Nungwi Aquarium and Sunset Dhow Cruise, Airport Transfer, Excludes: All Taxes Exclusive of the Government's Infrastructure Fee, Tips & anything not mentioned above",
    price: 2350,
    type: "Double Sharing",
  },
  
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },
 
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Packages
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
