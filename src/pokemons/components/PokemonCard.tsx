import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemons";
import { IoHeartOutline } from "react-icons/io5";

type Props = {
  pokemon: SimplePokemon;
};

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
            className="h-24 w-24 text-white rounded-full mx-auto"
            width={100}
            height={100}
            property="false"
          />

          <Link
            href={`pokemons/${pokemon.name}`}
            className="pt-2 text-lg font-semibold text-gray-50 capitalize"
          >
            #{pokemon.id} {pokemon.name}
          </Link>

          {/* <p className="text-sm text-gray-100"># {pokemon.id}</p> */}
        </div>
        <div className="border-b">
          <Link
            href="/dashboard"
            className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
          >
            <div className="text-red-600">
              <IoHeartOutline className="w-5 h-5" />
            </div>

            <div className="">
              <p className="text-sm font-medium text-gray-800 leading-none">
                No es favorito
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
