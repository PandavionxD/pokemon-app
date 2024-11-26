import { BackComponent } from "@/components/BackComponent";
import { Title } from "@/components/Title";
import { Separator } from "@/components/ui/separator";
import { Poke } from "@/app/data/data";
import Image from "next/image";

const Peticion = async (name: string): Promise<Poke> => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data: Poke = await resp.json();
  return data;
};

interface Props {
  params: {
    name: string;
  };
}

export default async function PokePage({params}) {
  const { name } = params;
  const { species, name: namePokemon, moves } = await Peticion(name);
  const { url } = species;
  const id = url.split("/");
  const idPokemon = id[id.length - 2];

  return (
    <div className="w-full grid gap-8 grid-cols-2 justify-items-center h-[80vh] items-center">
      <div>
        <Title titulo={namePokemon} />
        <div className="flex gap-4 justify-center">
          <picture>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${idPokemon}.png`}
              width={300}
              height={300}
              alt="pokemon"
              priority={false}
            />
          </picture>
          <picture>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${idPokemon}.png`}
              width={300}
              height={300}
              alt="pokemon"
              priority={false}
            />
          </picture>
        </div>
      </div>
      <div className="w-full grid gap-4 ">
        <div className="flex w-full gap-4 justify-evenly">
          <h2 className="text-3xl"> Movimientos </h2>
          <BackComponent />
        </div>
        <Separator />
        <div className="flex flex-wrap">
          {moves.map((item, id) => (
            <div key={id}>{item.move.name} /</div>
          ))}
        </div>
      </div>
    </div>
  );
}
