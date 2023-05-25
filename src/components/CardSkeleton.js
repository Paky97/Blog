import Skeleton from "react-loading-skeleton";
import React from "react";

export default function CardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div
        className="max-w-xs rounded overflow-hidden m-4 card-skeleton"
        key={index}
      >
        <Skeleton width={50} height={50} />
        <div className=" my-4 flex py-2 px-5 left-col">
          <Skeleton />
        </div>
        <div>
          <div className="font-bold text-xl mb-2">
            {" "}
            <Skeleton />
          </div>
          <p className="right-col">
            {" "}
            <Skeleton count={5} />
          </p>
        </div>
        <div className=" pt-4 pb-2">
          <Skeleton />
        </div>
      </div>
    ));
}
