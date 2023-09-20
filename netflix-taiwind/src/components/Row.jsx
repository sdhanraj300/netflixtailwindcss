import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL,rowID }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    document.getElementById("slider"+rowID).scrollLeft -= 500;
  };
  const slideRight = () => {
    document.getElementById("slider"+rowID).scrollLeft += 500;
  };
  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 z-10 rounded-full absolute opacity-50 hover:opacity-100 hidden group-hover:block"
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie id={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="z-10 bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 hidden group-hover:block"
        />
      </div>
    </div>
  );
};

export default Row;
