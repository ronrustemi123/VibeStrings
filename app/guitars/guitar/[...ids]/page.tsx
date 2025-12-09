import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import siteLogo from "@/public/logo.svg";
import guitarPageHeroImg from "@/public/guitar-page-splash.svg";
import { findUniqueModel } from "@/lib/queries";
import { getData } from "@/app/actions";
import GuitarPageTabs from "@/app/guitars/components/GuitarPageTabs";

export default async function GuitarPage({
  params,
  searchParams,
}: {
  params: { ids: string[] };
  searchParams: { startIndex: number };
}) {
  const ids = await params;
  const [brandId, modelId] = ids.ids;
  const { startIndex } = await searchParams;

  const { data, error } = await getData({
    query: findUniqueModel,
    variables: { brandId: brandId, modelId: modelId },
  });

  if (error) return <div>{error?.message}</div>;

  return (
    <>
      <section className={"w-page-width mx-auto  min-h-[60vh] relative"}>
        <div className={"mt-8 flex flex-col relative z-10 gap-2"}>
          <Link
            href={`/guitars/${brandId}`}
            className={
              "font-medium text-[#3D3D46] flex items-center gap-2 hover:underline"
            }
          >
            <ChevronLeftIcon size={18} />
            Back To Home
          </Link>
          <div className={"flex items-center gap-2.5"}>
            <Image src={siteLogo} alt="Logo" width={28} height={28} />
            <span className={"text-2xl"}>VibeStrings</span>
          </div>
        </div>
        <div className={"mt-32 w-fit relative z-10"}>
          <h1 className={"text-header font-bold text-center "}>
            {data?.findUniqueModel?.name}
          </h1>
          <p className="mt-1 text-grey-text text-base">
            $
            {data?.findUniqueModel?.price.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <span className={"absolute right-0 -top-16 hidden lg:block z-0 "}>
          <Image
            src={guitarPageHeroImg}
            alt={"Hero Image"}
            priority={true}
            className={"object-cover object-center"}
            style={{ height: "auto", width: "auto" }}
          />
          <span
            className={
              "absolute bottom-0 right-2/5 bg-white p-7 rounded-full translate-1/2"
            }
          >
            <Image
              src={siteLogo}
              alt={"site logo"}
              width={24}
              height={24}
              style={{ height: "auto", width: "auto" }}
            />
          </span>
          <span className={"absolute top-2/6 right-1/7 -rotate-45"}>
            <Image
              src={data?.findUniqueModel?.image}
              alt={"model image"}
              width={400}
              height={220}
              style={{ height: "auto", width: "auto" }}
              className={"object-cover object-center"}
            />
          </span>
        </span>
      </section>
      <GuitarPageTabs
        brandId={brandId}
        startIndex={startIndex}
        modelId={modelId}
        description={data?.findUniqueModel?.description}
        specs={data?.findUniqueModel?.specs}
        musicians={data?.findUniqueModel?.musicians}
      />
    </>
  );
}
