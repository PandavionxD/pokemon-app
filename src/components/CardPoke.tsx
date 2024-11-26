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

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { ToastComponent } from "./ToastComponent";
import Link from "next/link";
import { Separator } from "./ui/separator";

export const CardPoke = async ({ name, id }) => {
  return (
    <Card className="w-[350px]">
      <CardHeader className="grid grid-cols-10 items-center">
        <CardDescription>{id + 1} </CardDescription>
        <Separator orientation="vertical" />
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
        <TooltipProvider delayDuration={300} skipDelayDuration={100}>
          <ToastComponent name={name} />
        </TooltipProvider>

        <Link href={`/dashboard/${name}`}>
          <TooltipProvider delayDuration={300} skipDelayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Ver más</Button>
              </TooltipTrigger>
              <TooltipContent className="bg-white mt-1 text-black border dark:bg-[#020817] dark:text-white ">
                <p>Ver ataques principales</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      </CardFooter>
    </Card>
  );
};
