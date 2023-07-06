import React from "react";
import { Link } from "react-router-dom";

const SearchItems = ({item}) => {
  return (
    <div className="searchItem p-9  bg-zinc-900  w-100%  mt-5 rounded-3xl gap-10  flex text-white ml-96">
      <img
        src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
        alt=""
        className="w-200px h-200px object-cover border-gray-900 border "
      />
      <div className="gap-1 ml-5 flex flex-col">
        <h1 className="text-3xl font-bold flex flex-1">{item.name}</h1>
        <span className="text-2xl font-semibold">{item.distance} From Center</span>
        <br/>
        <sapn className='text-2xl bg-green-500 w-60 rounded-md p-1'> free airport Taxi</sapn>
        <span className="text-2xl">{item.decs} Studio Apartment With Air Conditioning</span>

        <br/>
        <span className="text-xl">Entire Studio | 1 bathroom | 21m x 21 m full Bedroom</span>
        <span className="text-md">Free Cancellation </span>
        <span className="text-md"> You Can Cancle Later , so lock in the great Price today !!</span>
      </div>
      <div className=""> 
       <div className="raiting flex justify-between">
        <span className="bg-blue-400 p-2 rounded-md">Excellent</span>
        <button className="bg-green-500 text-black p-2 rounded-md">8.9</button>
      </div>
      <div className="details">
<span className="flex flex-col mt-52 bg-blue-500 text-white rounded-lg p-2 text-2xl font-bold"> {item.cheapestPrice}</span>
<span className="flex flex-col bg-gray-500 text-white rounded-lg mt-2">Includes All taxes and fees (T&C*)</span>
<Link to={`/hotels/${item._id}`}>
<button className="flex flex-col rounded-xl bg-green-500 text-white p-3 mt-2 font-bold cursor-pointer">Check Availability</button>
</Link>
      </div>
      </div>
    </div>
  );
};

export default SearchItems;
