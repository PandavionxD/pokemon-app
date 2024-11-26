import Image from "next/image";
import { ToogleDark } from "./ToggleDark";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export const Navbar = () => {
  return (
    <nav className=" h-24 flex justify-between ">
      <div className="flex items-center">
        <picture>
          <Image
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg"
            }
            alt="psyduck"
            width={60}
            height={60}
            priority={true}
          />
        </picture>
        <p className="text-3xl ms-4 ">Pokemón</p>
      </div>
      <div className="flex items-center gap-6 ">
        <TooltipProvider
        delayDuration={300}
        skipDelayDuration={100}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">
                <Heart className="text-red-500" />
                Favoritos
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-white mt-1 text-black border dark:bg-[#020817] dark:text-white " >
              <p>Pokemons Favoritos </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <ToogleDark />
      </div>
    </nav>
  );
};
