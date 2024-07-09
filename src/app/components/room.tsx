import React from "react";
import Image from "next/image";
import pic1 from "./images/pexels-fotoaibe-1743231.jpg"
import pic2 from "./images/pexels-pixabay-271618.jpg"
import pic3 from "./images/pexels-pixabay-276671.jpg"
import pic4 from "./images/pexels-suhel-vba-1749662-3659683.jpg"
import pic5 from "./images/pexels-jvdm-1454806.jpg"
import pic6 from "./images/pexels-suhel-vba-1749662-3659681.jpg"
import { FaStar } from "react-icons/fa";

export const Room = () => {
  const rooms = [
    {
      id: 0,
      img: pic1,
      title: "Room 1",
    },
    {
      id: 1,
      img: pic2,
      title: "Room 2",
    },
    {
      id: 2,
      img: pic3,
        title: "Room 3",
    },
    {
      id: 3,
      img: pic4,
        title: "Room 4",

    },
    {
      id: 4,
      img: pic5,
      title: "Room 5",
    },
    {
      id: 5,
      img: pic6,
      title: "Room 6",
    },
  ];

  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<FaStar key={i} />);
    }
    return stars;
  };
  
  return (
    <div className="h-[600px] mb-[700px]">
      <div>
        <h1 className=" text-center text-[44px] font-serif font-extrabold ">
          Our Rooms
        </h1>
        <div className="w-full justify-center flex">
          <div className="w-[50%]  ">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus, ac blandit elit tincidunt id. Sed
              rhoncus, tortor sed eleifend tristique, tortor mauris molestie
              elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet
              elit iaculis pretium sit amet quis magna.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap w-full gap-[50px]  p-[60px] justify-center ">
        {rooms.map(({id,img,title}) => (
          <div
          key={id.toString()}
            className="h-[500px] w-[calc(35%-5rem)]   text-black flex justify-center gap-2 items-center flex-col rounded-xl border cursor-pointer shadow-xl border-orange-400"
          >

            <Image src={img} alt="room 1" className="w-[80%] h-[300px] rounded-lg transition duration-500 transform hover:scale-110" />
            <h2 className=" mt-5">{title}</h2>
            <p className=" font-light">$1500/per night</p>
            <div className=" flex gap-4 p-4">
                <div className="flex p-1 text-orange-400"> {renderStars().map(star => star)}
                    </div>
                 <div className="pb-4 font-light">{"5.0"}</div>
                 <div className=""><button className="bg-orange-400 text-white p-2 rounded-xl">Book Now</button></div>
                 </div>
            {/* <p className="p-2 rounded-2xl">{icon.title}</p> */}
            
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};
