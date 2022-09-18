import React from "react";

function Card() {
  return (
    <div>
      <div className="absolute px-4 py-1 bg-white shadow-xl shadow-black z-10 ml-1 mt-10 text-xs">
        FEATURED
      </div>
      <div className="max-w-xs rounded overflow-hidden m-4">
        <img
          className="w-full rounded-lg"
          title="img"
          src="https://picsum.photos/100/70"
          alt="Sunset in the mountains"
        />
        <div className="w-full bg-green-100 rounded-md my-4 flex py-2 px-5">
          <span className=" font-semibold">MARKETING</span>
          <span className="ml-auto">5min Read</span>
        </div>
        <div>
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className=" pt-4 pb-2">
          <button className="bg-green-400 rounded-md py-2 px-5  font-semibold ">
            Read full article
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
