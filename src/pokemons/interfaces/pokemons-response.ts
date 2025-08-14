export interface PokemonResponse {
  count: number;
  next: string;
  previous: null;
  results: PokemonUrl[];
}

export interface PokemonUrl {
  name: string;
  url: string;
}
