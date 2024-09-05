import { useState } from "react";
import Tag from "../../assets/tag.svg";
import { getImagUrl } from "../../utils/cineUtility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

import { useContext } from "react";
import { MovieContext } from "../../context/context";

import { toast } from "react-toastify";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { state, dispatch } = useContext(MovieContext);

  //All handler

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };
  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  //Add To Cart
  const handleAddToCart = (event, movie) => {
    event.stopPropagation();

    const found = state.cartData.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      dispatch({
        type: "Add_To_Cart",
        payload: {
          ...movie,
        },
      });

      toast.success(`Added  ${movie.title} to Cart !`);
    } else {
      toast.error(
        `The movie ${movie.title} has been added to the cart already`
      );
    }
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full h-96 object-cover"
            src={getImagUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
          </figcaption>
        </a>
        {/* Move the add to cart button outside the main link */}
        <a
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm mt-4"
          href="#"
          onClick={(e) => handleAddToCart(e, movie)}
        >
          <img src={Tag} />
          <span>${movie.price} | Add to Cart</span>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
