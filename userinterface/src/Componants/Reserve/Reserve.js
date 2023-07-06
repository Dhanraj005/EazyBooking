import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../Context/SearchCont";
import useFetch from "../../hooks/useFetch";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavalibleDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    
          navigate("/");
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/hotelRooms/availability/${roomId}`, {
            dates: allDates,
          });
          
          return res.data;
        })
        
      );
      
    } catch (err) {}
  };
  return (
    <div className="reserve w-100 h-100 bg-zinc-900 items-center justify-center flex flex-col relative ">
      <div className="rContainer bg-white p-4 w-100 relative justify-between">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose  cursor-pointer absolute top-0 right-0 p-1"
          onClick={() => setOpen(false)}
        />
        <span className="text-3xl font-bold italic">Select your rooms:</span>
        {data.map((item) => (
          <div className="rItem flex items-center gap-4 p-3" key={item._id}>
            <div className="rItemInfo  flex flex-col gap-2">
              <div className="rTitle text-3xl">{item.title}</div>
              <div className="rDesc text-2xl">{item.desc}</div>
              <div className="rMax text-lg font-bold">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice font-semibold text-2xl">{item.price}</div>
            </div>
            <div className="rSelectRooms gap-3 text-xl text-gray-600 flex flex-wrap">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room flex flex-col justify-around  gap-2">
                  <label className=" font-bold">{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={handleClick}
          className="rButton b-none p-3px 20px bg-zinc-900 text-white p-2 font-bold text-xl rounded-2xl cursor: pointer"
        >
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
