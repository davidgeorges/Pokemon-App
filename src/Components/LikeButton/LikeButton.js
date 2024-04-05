import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import './LikeButton.css'
import { useEffect } from 'react';

function LikeButton({ pokemon, removeFromFavorites }) {
    const [liked, setLiked] = useState(false);
  
    useEffect(() => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const isLiked = favorites.some((fav) => fav.name === pokemon.name);
      setLiked(isLiked);
    }, [pokemon]);
  
    const handleLike = (e) => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      favorites.push(pokemon);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      e.stopPropagation();
      setLiked(true);
    };
  
    const handleDislike = (e) => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const updatedFavorites = favorites.filter((fav) => fav.name !== pokemon.name);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      e.stopPropagation();
      setLiked(false);
      if(removeFromFavorites !== undefined){
        removeFromFavorites(pokemon)
      }
    };
  
    if (liked)
      return (
        <FcLike
          size="30"
          onClick={handleDislike}
          className='btnLike'
        />
      );
    return (
      <FaRegHeart
        size="30"
        onClick={handleLike}
        className='btnLike'
      />
    );
  }
  
  export default LikeButton;