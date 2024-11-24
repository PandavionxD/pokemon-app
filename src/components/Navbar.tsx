import Image from "next/image";
import { ToogleDark } from "./ToggleDark";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

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
        <Button variant={"outline"}>
          <Heart className="text-red-500" />
          Favoritos
        </Button>
        <ToogleDark />
      </div>
    </nav>
  );
};
