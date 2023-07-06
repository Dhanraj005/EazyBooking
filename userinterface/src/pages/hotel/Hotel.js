import React, { useContext, useState } from "react";
import Navbar from "../../Componants/navbar/Navbar";
import Header from "../../Componants/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Mail from "../../Componants/Mail/Mail";
import Footer from "../../Componants/Footer/Footer";
import {  useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../Context/SearchCont";
import { AuthContext } from "../../Context/AuthContext";
import Reserve from "../../Componants/Reserve/Reserve";

const Hotel = () => {
  const [sildeNumber, setSlideNumber] = useState(0);
  const [openSlide, setOpenSlide] = useState(false);
  const[openModel,setOpenModel]=useState(false);

  const location = useLocation();
  const nevigate = useNavigate();
  const {user} = useContext(AuthContext );

  const id = location.pathname.split("/")[2];

  const { dates, options } = useContext(SearchContext);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);

  const images = [
    {
      src: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    },
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    },
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    },
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    },
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    },
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    }, 
  ];

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpenSlide(true);
  };

  const MILESTONE_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(data1, data2) {
    const timeDiff = Math.abs(data2.getTime() - data1.getTime());
    const diffDays = Math.ceil(timeDiff / MILESTONE_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

const handleClick=()=>{
if (user){
  setOpenModel(true);
}
else{ nevigate("/login")}
}



  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div>
          <div className="hotelContainer flex justify-center mt-5   ">
            {openSlide && (
              <div className="slider justify-center items-center">
                <FontAwesomeIcon icon={faCircleXmark} />
                <FontAwesomeIcon icon={faCircleArrowLeft} />
                <div className="sliderWrapper">
                  <img src={images[sildeNumber]} alt="" />
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </div>
            )}
            <div className="wrapper flex flex-col gap-3  ">
              <h1 className="text-3xl font-bold">{data.name} </h1>
              <div className="adress text-2xl font-semibold">
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="">Mundhwa Road,Koregaon Park,Pune</span>
              </div>
              <span className="hotelDistance font-semibold text-blue-500 ">
                Excellent location {data.distance}m from center
              </span>
              <span className="price font-semibold  ">
                Book a stay and pickup and drop will be free
              </span>
              <div className=" flex flex-wrap gap-10  justify-around   object-cover  bg-zinc-900 w-100">
                {images.map((photo, index) => (
                  <div className=" flex  m-3">
                    <img
                      onClick={() => handleOpen(index)}
                      className="rounded-xl "
                      src={photo.src}
                    />
                  </div>
                ))}
              </div>
              <div className="flex ">
                <div className="detailtext flex flex-col gap-5 ">
                  <h1 className="text-3xl font-bold italic ml-10">
                    Stay in prime location of pune{" "}
                  </h1>
                  <p className="text-xl font-semibold ">
                    You get a single room with one or more king, queen, full, or
                    twin beds, a work desk, a bathroom, and maybe a closet, a
                    TV, and a dresser. A suite is a much larger accommodation.
                    <br /> It usually has an attached bathroom, a living area,
                    and most times, includes a dining area as well.
                  </p>
                </div>
                <div className="detailPrice bg-slate-400 rounded-xl p-4 font-semibold ">
                  <h1> Prefect for the {days} night stay</h1>
                  <span>
                    Locatio in the hert of the Pune, this property has excellent
                    location and raiting
                    <b className="bg-blue-500 rounded-md"> 8.9 </b>
                  </span>
                  <h2 className="bg-green-500 w-40 p-2 rounded-xl mt-2">
                    <b>₹{days * data.cheapestPrice * options.room}</b> ({days}{" "}
                    night)
                  </h2>
                  <button className="bg-blue-500 p-2 mt-3 rounded-xl" onClick={handleClick}>
                    Book Now !!!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Mail />
          <Footer />
        </div>
      )}
      {openModel && <Reserve setOpenSlide={setOpenModel} hotelId={id}/>}
    </div>
  );
};

export default Hotel;
