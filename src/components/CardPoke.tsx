import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { Heart } from "lucide-react";

interface Props {
  name: string;
  id: number;
}

export const CardPoke = async ({ name, id }): Props => {
  return (
    <Card className="w-[350px]">
      <CardHeader className="grid grid-cols-6 ">
        <CardDescription>{id + 1} </CardDescription>
        <CardTitle className="capitalize"> {name} </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            id + 1
          }.svg`}
          width={120}
          height={120}
          alt={name}
          className=" w-[120px] h-[120px]"
          priority={false}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant={"destructive"} className="dark:bg-transparent border dark:hover:bg-[#1E293B]" >
          <Heart className=" text-white dark:text-red-600  " />
          Favorito
        </Button>
        <Button variant="outline">Ver más</Button>
      </CardFooter>
    </Card>
  );
};
