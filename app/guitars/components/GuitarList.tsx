import Image from "next/image";
import GuitarListFilterBar from "@/app/guitars/components/GuitarListFilterBar";
import { getData } from "@/app/actions";
import { findBrandModels, searchModels } from "@/lib/queries";
import { CustomPagination } from "@/app/components/CustomPagination";
import Link from "next/link";

export default async function GuitarList({
  id,
  categories,
  searchParams,
}: {
  id: string;
  categories: string[];
  searchParams: { q?: string; category?: string; page?: number };
}) {
  let data;

  const page = Number(searchParams?.page ?? 1);
  const pageSize = 6;

  if (searchParams?.q) {
    const res = await getData({
      query: searchModels,
      variables: { brandId: id, name: searchParams?.q },
    });
    data = res?.data?.searchModels;
  } else {
    const res = await getData({
      query: findBrandModels,
      variables: { id, sortBy: { field: "name", order: "ASC" } },
    });
    data = res?.data?.findBrandModels;
  }

  if (searchParams?.category && searchParams?.category !== "ALL") {
    data = data.filter((m: any) => m.type === searchParams?.category);
  }

  const paginatedModels = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <section className="w-full mt-32 min-h-screen">
      <h2 className="text-black-text text-center font-bold text-5xl">
        Check out the <span className="text-accent">Selection</span>
      </h2>

      <GuitarListFilterBar categoryArr={categories} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-24 gap-12 gap-y-24">
        {paginatedModels.map((model: any) => (
          <Link href={`/guitars/guitar/${id}/${model.id}`} key={model.id}>
            <div>
              <Image
                src={model.image}
                alt="guitar image"
                width={360}
                height={190}
              />
              <p className="mt-12 font-medium text-black-text">{model.name}</p>
              <p className="mt-1 text-grey-text text-sm">
                $
                {model.price.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className={" flex justify-between w-full mt-12"}>
        <div>
          <p className={"uppercase text-[#9292A3] text-sm"}>
            showing
            <span className={"font-medium text-[#3D3D46]"}>
              {" "}
              {data.length <= pageSize ? data.length : pageSize}{" "}
            </span>
            results from
            <span className={"font-medium text-[#3D3D46]"}> {data.length}</span>
          </p>
        </div>
        <div className={"w-fit"}>
          <CustomPagination
            totalCount={data.length}
            pageSize={pageSize}
            page={page}
          />
        </div>
      </div>
    </section>
  );
}
