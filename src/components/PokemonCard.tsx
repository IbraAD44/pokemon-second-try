interface PokemonProps {
  imgSrc?: string;
  name: string;
}

function PokemonCard({ pokemon }: { pokemon: PokemonProps }) {
  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="" /> : <p>????</p>}
      <figcaption>{pokemon.name}</figcaption>;
    </figure>
  );
}

export default PokemonCard;
