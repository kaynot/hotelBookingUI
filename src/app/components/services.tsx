import React from "react";
import { FaCoffee, FaDumbbell, FaSwimmer, FaUtensils, FaWifi } from "react-icons/fa";
import { MdLocalParking, MdRoomService, MdSpa } from "react-icons/md";

export const Services = () => {
  const icons = [
    {
    id:0,
    icon: <FaCoffee size={50} color=" white "/>,
    title: "Breakfast",
  },
    {
    id:1,
    icon: <FaWifi  size={50} color=" white "/>,
    title: "Wifi",
  },
    {
    id:2,
    icon: <FaDumbbell size={50} color=" white "/>,
    title: "Gym",
  },
    {
    id:3,
    icon: <FaUtensils size={50} color=" white "/>,
    title: "Cafeteria",
  },
    {
    id:4,
    icon: <MdLocalParking size={50} color=" white "/>,
    title: "Parking",
  },
    {
    id:5,
    icon: <FaSwimmer size={50} color=" white "/>,
    title: "Pool",
  },
    {
    id:6,
    icon: <MdSpa size={50} color=" white " />,
    title: "Spa",
  }
  ,{
    id: 7,
    icon: <MdRoomService size={50} color=" white "/>,
    title: "Room Service",
  },
]
  return (
    <div className="h-[500px]   w-full mb-[200px] ">
        <h1 className=" text-center text-[44px] font-serif font-extrabold pt-10 " >Our Facilities</h1>
      <div className="flex flex-wrap gap-4  p-[60px] mt-8 w-full  "  >
        {icons.map((icon) => (
          <div
            className="h-[200px] w-[calc(25%-1rem)] text-black flex justify-center gap-2 items-center flex-col rounded-xl border cursor-pointer shadow-xl border-orange-400"
          >
            <div className="bg-orange-400 p-2 rounded-full ">
            {icon.icon}
            </div>
            <p className="p-2 rounded-2xl">{icon.title}</p>
            
          </div>
        ))}
      </div>

    </div>
  );
};
