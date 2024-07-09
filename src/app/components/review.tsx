import React from "react";
import Image from "next/image";
import pic1 from "./images/pexels-cottonbro-10141010.jpg"
import pic2 from "./images/pexels-ivan-siarbolin-1513699-3695799.jpg"
import pic3 from "./images/pexels-nardo-1870916-3574678.jpg"
import { FaStar } from "react-icons/fa";

export const Review = () => {
    const reviews = [
        {
            id:0,
            name:"John Doe",
            img:pic1,
            review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna."


        },
        {
            id:2,
            name:"Peter Brew",
            img:pic2,
            review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna."


        },
        {
            id:3,
            name:"Grace Stan",
            img:pic3,
            review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna."


        },
    ]
    const renderStars = () => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
          stars.push(<FaStar key={i} />);
        }
        return stars;
      };
return (
    <div className="h-[600px] ">
        <h1 className="text-center text-[44px] font-serif font-extrabold mt-[100px]"> Reviews </h1>
        <div className="p-8 flex justify-center gap-4">
            {reviews.map((review) => (
                <div key={review.id} className="h-[350px] w-[40%] rounded-3xl p-8  border border-orange-400 shadow-xl ">
                    <div className="flex justify-center">
                        <div>
                            <Image src={review.img} alt={review.name} className="rounded-full w-[55px] h-[55px]" />
                        </div>
                    </div>
                    <h1 className="text-center text-[22px] font-serif font-extrabold mt-4">{review.name}</h1>
                    {review.review}
                    <div className="flex justify-center mt-4 gap-2 text-orange-400">
                        {renderStars()}</div>
                </div>
            ))}
        </div>
    </div>
);
};
