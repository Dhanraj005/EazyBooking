import React from "react";
import useFetch from "../../../hooks/useFetch";

const FeaturedHotel = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true");
  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];
  return (
    <div className="w-100% flex gap-5  justify-between m-3">
      {loading ? (
        "Loading"
      ) : (
        <>
        {data && images.map((item,index)=>(
          <div className=" flex-1 flex flex-col m-3" key={index}>
            <img
              className="rounded-3xl h-80 w-full bg-slate-900"
              src={item}
              alt=""
            />
            <span className="text-3xl font-bold">{data[index]?.name} </span>
            <span className="text-2xl font-bold">{data[index]?.city} </span>
            <span className="text-xl font-bold">Starting from {data[index]?.cheapestPrice} </span>
            {item.rating && <div className="fRaiting text-xl font-bold">
              <button className="bg-black text-white p-1 m-1">{data[index]?.rating}</button>
              <span>Top rated</span>
            </div>}
          </div>))}
        </>
      )}
    </div>
  );
};

export default FeaturedHotel;
