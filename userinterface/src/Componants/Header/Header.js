import React, { useContext, useState } from "react";
import "./header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import {
  faBed,
  faCalendarDays,
  faCar,
  faHotel,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../Context/SearchCont";
import { AuthContext } from "../../Context/AuthContext";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 1,
    room: 1,
  });

  const handleOption = (name, opration) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: opration === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const nevigate = useNavigate();
  const {user} = useContext(AuthContext );


  const {dispatch}=useContext(SearchContext)

  const handleSearch = () => {
    dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}})
    nevigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div
      className={
        type !== "list "
          ? " bg-zinc-900 h-30 p-5"
          : "headerTail bg-zinc-900 h-40 reative"
      }
    >
      <div className="headerListTail flex content-center	items-center  justify-around	gap-40">
        <div className="headerListItemTail  border-4 rounded p-2 items-center">
          <FontAwesomeIcon icon={faBed} className="text-white" />
          <span className="text-white text-xl border-gray-300">Stay</span>
        </div>
        <div className="headerListItemTail border-4 rounded border-gray-300 p-2 items-center">
          <FontAwesomeIcon icon={faPlane} className="text-white" />
          <span className="text-white text-xl">Flight</span>
        </div>
        <div className="headerListItemTail border-4 rounded border-gray-300 p-2 items-center">
          <FontAwesomeIcon icon={faCar} className="text-white"/>
          <span className="text-white text-2xl">Car</span>
        </div>
        <div className="headerListItemTail border-4 rounded border-gray-300 p-2 items-center">
          <FontAwesomeIcon icon={faBed} className="text-white"/>
          <span className="text-white text-xl">Rooms</span>
        </div>
        <div className="headerListItemTail border-4 rounded border-gray-300 p-2 items-center">
          <FontAwesomeIcon icon={faTaxi} className="text-white" />
          <span className="text-white text-2xl">Taxt</span>
        </div>
      </div>
      <div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle text-3xl m-1 font-bold text-center text-white	">
              Grab Discount You Never Got Before !!!
            </h1>
            <p className="m-1 text-2xl text-center text-white	">
              get reward for and casback with various payment method.Hurry Up
              !!! Book now to unlock some exicting offers!!!!(T&C*)
            </p>
             {!user && <button className=" items-center text-black justify-around rounded ml-14 p-1 bg-slate-200">
              Sign In / Register
            </button>}
            <div className="headerSearch  mt-10">
              <div className="headerSearchItem ">
                <FontAwesomeIcon icon={faHotel} className="" />
                <input
                  className=" headerSearchInput"
                  type="text"
                  placeholder="Search for where"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-slate-200"
                />

                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchtext text-lg"
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date absolute top-50px"
                    minDate={new Date()}
                    
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="" />
                <span
                  className="headerSearchtext"
                  onClick={() => setOpenOption(!openOption)}
                >{`${options.adult}adult | ${options.children}children | ${options.room}room `}</span>
                {openOption && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                          disabled={options.adult <= 1}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">1</span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">children</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                          disabled={options.children <= 0}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">1</span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                          disabled={options.room <= 1}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">1</span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                <button
                  className="bg-slate-900 rounded text-lg text-white p-1 "
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
