import React from "react";

function Card({ art, index, onClick, router }) {
  return (
    <div>
      {art.featured && (
        <div className="absolute px-4 py-1 bg-white shadow-xl shadow-black z-10 ml-1 mt-10 text-xs">
          FEATURED
        </div>
      )}
      <div className="max-w-xs rounded overflow-hidden m-4">
        <img
          className="w-full rounded-lg"
          title="img"
          src={art.image}
          alt="Sunset in the mountains"
        />
        <div className="w-full bg-green-100 rounded-md my-4 flex py-2 px-5">
          <span className=" font-semibold">MARKETING</span>
          <span className="ml-auto">{art.min_read}min Read</span>
        </div>
        <div>
          <div className="font-bold text-xl mb-2">{art.title}</div>
          <p className="text-gray-700 text-base">{art.short_description}</p>
        </div>
        <div className=" pt-4 pb-2">
          <button
            onClick={() => {
              router.push("/article/" + art.id);
            }}
            className="bg-green-400 rounded-md py-2 px-5  font-semibold "
          >
            Read full article
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
