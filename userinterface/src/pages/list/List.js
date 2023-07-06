import React, { useState } from "react";
import Navbar from "../../Componants/navbar/Navbar";
import Header from "../../Componants/Header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItems from "../../Componants/SearchItem/SearchItems";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  // const [options,setOptions]=useState(location.state.options)

const[min,setMin]=useState(undefined);
const[max,setMax]=useState(undefined);


  const { data, loading, error ,reFetch} = useFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max || 1000}`);

const handleClick=()=>{
reFetch()
}



  // console.log(location)

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer flex gap-5 mt-10   ">
      
        <div className="listWrapper   fixed ">
          <div className="search  bg-zinc-900 text-white justify-center p-5 rounded-xl ">
            <h1 className="listTitle  text-white font-bold">Search</h1>
            <div className="listsearchItem ">
              <label className="text-3 font-bold ">Destination:</label>
              <input
                type="text"
                className="rounded-md w-full"
                placeholder={destination}
              />
            </div>
            <div className="listsearchItem ">
              <label className="text-xl font-semibold h-5 border-none ">
                Check-in -{" "}
              </label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="flex-1 flex items-center cursor-pointer bg-white text-black rounded-md p-1"
              >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                dates[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="">
              <label className="text-2xl gap-5">filter</label>
              <div className="optionText  ">
                <span>
                  Min Price <small>(per night)</small>
                </span>
                <input onChange={e=>setMin(e.target.value)}
                  className="text-black rounded-md w-full "
                  type="number"
                />
              </div>
              <div className="optionText">
                <span>
                  Max Price <small>(per night)</small>
                </span>
                <input onChange={e=>setMax(e.target.value)}
                  className="text-black rounded-md w-full "
                  type="number"
                />
              </div>
              <div className="optionText ">
                <span>Adult</span>
                <input
                  className="text-black rounded-md w-full"
                  type="number"
                  min={1}
                  placeholder={Option}
                />
              </div>
              <div className="optionText">
                <span>Childern</span>
                <input
                  className="text-black rounded-md h-10 w-full"
                  type="number"
                  min={0}
                />
              </div>
              <div className="optionText ">
                <span>Room</span>
                <input
                  className="text-black rounded-md h-10 w-full"
                  type="number"
                  min={1}
                />
              </div>
            </div>
            <button className="bg-white rounded-md text-black p-2  mt-3 items-center ml-9 w-20 " onClick={handleClick}>
              Search{" "}
            </button>
          </div>
        </div>
        <div className=" ">
{loading ? "loading" : <>
 {data.map(item=>(
  <SearchItems item={item} key={item._id }/>

 ))}



</>}
        </div>
      </div>
    </div>
  );
};

export default List;
