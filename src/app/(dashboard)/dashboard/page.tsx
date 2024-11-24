import { Grid } from "@/components/Grid";
import { Title } from "@/components/Title"
import { Metadata } from 'next';

export const metadata:Metadata =  {
    title:"Pokemons Primera generación",
    description:"151 pokemones de la primera generación"
}

export default function PokePage() {
  return (
    <div className="max-w-[80%] mx-auto" >
        <Title titulo={"Pókemons App"} />
        <Grid/>
    </div>
  );
}