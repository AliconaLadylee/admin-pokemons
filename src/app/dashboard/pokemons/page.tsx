import { PokemonsGrid } from "@/pokemons/components/PokemonsGrid";
import { PokemonResponse } from "@/pokemons/interfaces/pokemons-response";
import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemons";

export const metadata = {
  title: "Pokemons",
  description: "Pokemons page",
};

const getPokemons = async (
  limit: number = 20,
  offset: number = 0
): Promise<SimplePokemon[]> => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const pokemonResponse: PokemonResponse = await res.json();

  const pokemons: SimplePokemon[] = pokemonResponse.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="p-2 flex flex-col">
      <h1 className="text-2xl font-bold">
        Listado de Pokemons <span className="text-blue-500">Estaticos</span>
      </h1>

      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
}
