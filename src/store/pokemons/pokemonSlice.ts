import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemons";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PokemonState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonState = {
  1: {
    id: "1",
    name: "Bulbasaur",
  },
  6: {
    id: "6",
    name: "Charizard",
  },
};

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const { id } = action.payload;

      if (!!state[id]) {
        delete state[id];
      } else {
        state[id] = action.payload;
      }
    },
  },
});

export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
