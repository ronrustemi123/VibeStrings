import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface specInterface {
  bodyWood: string;
  bridge: string;
  fingerboardWood: string;
  neckWood: string;
  pickups: string;
  scaleLength: string;
  tuners: string;
}

interface musiciansInterface {
  bands: string[];
  musicianImage: string;
  name: string;
}

export default function GuitarPageTabs({
  description,
  specs,
  musicians = [],
  startIndex = 0,
  brandId,
  modelId,
}: {
  description: string;
  specs: specInterface;
  musicians?: musiciansInterface[];
  startIndex?: number;
  brandId: string;
  modelId: string;
}) {
  const endIndex = Number(startIndex) + 2;
  const visibleMusicians = musicians.slice(
    Number(startIndex),
    Number(endIndex)
  );

  return (
    <section className={"w-page-width mx-auto "}>
      <Tabs defaultValue="specification" className="w-full">
        <TabsList
          className={
            "w-full justify-start rounded-none flex-col gap-8 md:flex-row md:gap-0  bg-transparent p-0 mb-24"
          }
        >
          <TabsTrigger
            value="specification"
            className={
              "relative w-full rounded-none font-thin border-b-3 border-x-0  bg-transparent px-4 pb-5 pt-2 text-[#9292A3] shadow-none data-[state=active]:font-medium text-2xl focus-visible:ring-0 data-[state=active]:border-b-accent data-[state=inactive]:border-b-[#666666] data-[state=inactive]:border-b-1 data-[state=active]:text-accent data-[state=active]:shadow-none"
            }
          >
            Specification
          </TabsTrigger>

          <TabsTrigger
            value="musician"
            className={
              "relative w-full rounded-none font-thin font-regular border-b-3 border-x-0 pb-5  bg-transparent px-4 pt-2 text-[#9292A3] shadow-none data-[state=active]:font-medium text-2xl  focus-visible:ring-0 data-[state=active]:border-b-accent data-[state=inactive]:border-b-[#666666] data-[state=inactive]:border-b-1 data-[state=active]:text-accent data-[state=active]:shadow-none"
            }
          >
            Who plays it?
          </TabsTrigger>
        </TabsList>
        <TabsContent value="specification" className={"lg:px-24 mb-24"}>
          <p className={"font-light text-2xl"}>{description}</p>
          <ul className={"list-disc pl-6 *:font-light *:text-2xl mt-12 "}>
            <li>Body Wood: {specs?.bodyWood}</li>
            <li>Neck Wood: {specs?.neckWood}</li>
            <li>Fingerboard: {specs?.fingerboardWood}</li>
            <li>Pickups: {specs?.pickups}</li>
            <li>Tuners: {specs?.tuners}</li>
            <li>Scale Length: {specs?.scaleLength}</li>
            <li>Bridge: {specs?.bridge}</li>
          </ul>
        </TabsContent>
        <TabsContent
          value="musician"
          className={
            "lg:px-24 justify-center flex items-center flex-col gap-12"
          }
        >
          <div className={"flex gap-12 flex-wrap justify-center"}>
            {visibleMusicians?.map((el: musiciansInterface) => (
              <div
                key={el?.name}
                className={
                  "max-w-[500px] h-full min-h-[500px] flex items-center flex-col rounded-xl bg-[#FFEFE8] border border-[#EBECEF] p-6"
                }
              >
                <Image
                  src={el?.musicianImage}
                  alt={"musician image"}
                  width={450}
                  height={450}
                  className={
                    "rounded-xl object-center object-cover w-full h-[450px]"
                  }
                />
                <p className={"mt-6 font-medium text-2xl text-grey-text"}>
                  {el?.name}
                </p>
              </div>
            ))}
          </div>
          <div className="flex gap-6 mb-6">
            <Link
              href={`/guitars/guitar/${brandId}/${modelId}?startIndex=${Math.max(
                Number(startIndex) - 2,
                0
              )}`}
              className={`px-4 py-2 border rounded ${
                Number(startIndex) === 0 ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              <ChevronLeftIcon />
            </Link>
            <Link
              href={`/guitars/guitar/${brandId}/${modelId}?startIndex=${Math.min(
                Number(startIndex) + 2,
                musicians.length - 2
              )}`}
              className={`px-4 py-2 border rounded ${
                Number(startIndex) + 2 >= musicians.length
                  ? "opacity-50 pointer-events-none"
                  : ""
              }`}
            >
              <ChevronRightIcon />
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
