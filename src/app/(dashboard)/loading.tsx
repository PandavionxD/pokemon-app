import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  const numbers = Array(151).fill(1);

  return (
    <>
      <Skeleton className="text-center text-3xl w-[180px] h-[30px] mx-auto my-8" />
      <div className="flex gap-4 max-w-[80vw] mx-auto justify-center flex-wrap">
        {numbers.map((num) => (
          <div key={num} className="w-[370px] flex gap-2 justify-center flex-col  ">
            <Skeleton className="h-[30px] w-[80%] " />
            <div className=" w-[300px] grid place-content-center gap-2 place-items-center">
              <Skeleton className=" w-[120px] h-[120px] " />
              <div className="flex justify-between gap-6 w-full ">
                <Skeleton className=" w-[110px] h-[35px] " />
                <Skeleton className=" w-[110px] h-[35px] " />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
