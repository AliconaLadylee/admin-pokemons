"use client";

import { useAppSelector } from "@/store";
import { PokemonsGrid } from "./PokemonsGrid";
import { useState } from "react";
import { IoMdHeart } from "react-icons/io";

export const FavoritePokemons = () => {
  const pokemons = useAppSelector((state) => state.pokemons);
  const pokemonsArray = Object.values(pokemons);

  const [pokemonsFavorite] = useState(pokemonsArray);
  return pokemonsFavorite.length === 0 ? (
    <NoFavoritePokemons />
  ) : (
    <PokemonsGrid pokemons={pokemonsFavorite} />
  );
};

export const NoFavoritePokemons = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <IoMdHeart className="text-red-600 text-8xl" />
      <span className="text-2xl font-bold uppercase">No hay favoritos</span>
    </div>
  );
};
