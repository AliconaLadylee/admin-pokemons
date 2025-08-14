import { PokemonsGrid } from "@/pokemons/components/PokemonsGrid";

export const metadata = {
  title: "Favorites",
  description: "Favorites page",
};

export default async function PokemonsPage() {
  return (
    <div className="p-2 flex flex-col">
      <h1 className="text-2xl font-bold">
        Listado de Pokemons Favoritos <span className="text-blue-500">Global states</span>
      </h1>

      <PokemonsGrid pokemons={[]} />
    </div>
  );
}
