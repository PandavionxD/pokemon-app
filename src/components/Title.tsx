import { Separator } from "./ui/separator";


interface Props {
  titulo: string;
}

export const Title = ({ titulo = "undefined" }: Props) => {
  return (
    <>
      <h1 className="text-center text-3xl font-semibold py-4">{titulo}</h1>
      <Separator className="my-4" />
    </>
  );
};
