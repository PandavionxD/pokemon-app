"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export const BackComponent = () => {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.back()}>Volver</Button>
    </>
  );
};
