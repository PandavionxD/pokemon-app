"use client";

import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import {  toast } from "sonner";

interface Props {
  name: string
}

export const ToastComponent = ({name}:Props) => {
  return (
    <Tooltip>
    <TooltipTrigger asChild>
      <Button
      onClick={()=>{
        toast.info("Pókemon agregado",{
          description:`El pokemón ${name} fue agregado correctamente`
        })
      }}
        variant={"destructive"}
        className=" dark:bg-transparent border dark:hover:bg-[#1E293B]"
      >
        <Heart className="text-white dark:text-red-600 " />
        Favoritos
      </Button>
    </TooltipTrigger>
    <TooltipContent className="bg-white mt-1 text-black border dark:bg-[#020817] dark:text-white ">
      <p>Añadir a tus Pokemons Favoritos </p>
    </TooltipContent>
  </Tooltip> 
  )};
