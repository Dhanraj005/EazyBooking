import React from "react";
import useFetch from "../../hooks/useFetch";

const Feature = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=delhi,mumbai,pune"
  );
  console.log(data)
  return (
    <div className="fretured w-100% max-w-1024px flex items-between gap-5 z-1 ">
      {loading ? (
        "Loading  wait for while"
      ) : (
        <>
          <div className="featuredItem relative rounded-10px overflow-hidden h-250px bg-white ">
            <img
              className="w-100% object-cover rounded-3xl"
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
            />
            <div className="featurdTitle absolute bottom-10 left-20 z-1 ">
              <h1 className="text-5xl font-bold">Delhi</h1>
              <h2 className="text-xl font-semibold">
                {" "}
                {data[0]} premium properties in Delhi
              </h2>
            </div>
          </div>
          <div className="featuredItem relative rounded-10px overflow-hidden h-250px bg-white">
            <img
              className="w-100% object-cover rounded-3xl"
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
            />
            <div className="featurdTitle featurdTitle absolute bottom-10 left-20 z-1">
              <h1 className="text-5xl font-bold">Mumbai</h1>
              <h2 className="text-xl font-semibold">
                {data[1]} premium properties in Mumbai
              </h2>
            </div>
          </div>
          <div className="featuredItem relative rounded-10px overflow-hidden h-250px bg-white">
            <img
              className="w-100% object-cover rounded-3xl h-100"
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
            />
            <div className="featurdTitle featurdTitle absolute bottom-10 left-20 z-1">
              <h1 className="text-5xl font-bold">Pune</h1>
              <h2 className="text-xl font-semibold">
                {data[2]} premium properties in Pune
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Feature;
