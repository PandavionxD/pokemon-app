import { DataPokemon } from "@/data";
import { CardPoke } from "./CardPoke";

export const Grid = async () => {
  const limit = 151;
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data: DataPokemon = await resp.json();
  const { results } = data;
  return (
    <div className="flex gap-6 justify-center flex-wrap ">
      {results.map((item, id) => (
        <CardPoke name={item.name} id={id} key={id} />
      ))}
    </div>
  );
};
