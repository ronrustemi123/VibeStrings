import { findUniqueBrand } from "@/lib/queries";
import Link from "next/link";
import Image from "next/image";
import { getUniqueModel } from "@/app/actions";
import siteLogo from "@/public/logo.svg";
import guitarPageHeroImg from "@/public/guitar-page-splash.svg";
import GuitarList from "@/app/guitars/components/GuitarList";
import { ChevronLeftIcon } from "lucide-react";

export default async function GuitarPages({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { q: string; category: string; page: number };
}) {
  const { id } = await params;
  const sp = await searchParams;

  const { data, error } = await getUniqueModel({
    query: findUniqueBrand,
    variables: { id: id },
  });

  if (error) return <div>{error.message}</div>;

  return (
    <section className={"w-page-width mx-auto  min-h-[70vh] relative"}>
      <div className={"mt-8 flex flex-col relative z-10 gap-2"}>
        <Link
          href="/"
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
          Play like a <span className={"text-accent"}> Rockstar</span>
        </h1>
        <p className={"text-grey-text text-center mt-6 font-medium"}>
          With a legacy dating back to the 1950s, {data?.findUniqueBrand.name}{" "}
          blends expert <br /> craftsmanship with cutting-edge innovation to
          deliver guitars that <br /> inspire creativity and elevate your
          performance. Trusted by top <br /> artists worldwide,{" "}
          {data?.findUniqueBrand.name} guitars are built to play fast, sound
          bold, <br /> and stand out on any stage.
        </p>
      </div>
      <span className={"absolute right-0 -top-16 hidden lg:block z-0 "}>
        <Image
          src={guitarPageHeroImg}
          alt={"Hero Image"}
          priority={true}
          className={"object-cover object-center"}
        />
        <span
          className={
            "absolute bottom-0 right-2/5 bg-white p-7 rounded-full translate-1/2"
          }
        >
          <Image src={siteLogo} alt={"site logo"} width={24} height={24} />
        </span>
        <span className={"absolute top-1/5 right-1/7 opacity-50"}>
          <Image
            src={data?.findUniqueBrand.image}
            alt={"brand image"}
            width={450}
            height={280}
          />
        </span>
      </span>
      <GuitarList
        searchParams={sp}
        id={data?.findUniqueBrand.id}
        categories={data?.findUniqueBrand.categories}
      />
    </section>
  );
}
