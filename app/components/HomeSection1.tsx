import { getClient } from "@/lib/ApolloClient";
import { findAllBrands } from "@/lib/queries";
import Link from "next/link";
import Image from "next/image";

type Brand = {
  id: string;
  name: string;
  image: string;
  origin: string;
  categories: string[];
  __typename: string;
};

interface BrandsQueryResponse {
  findAllBrands: Brand[];
}

export default async function HomeSection1() {
  const { data } = await getClient().query<BrandsQueryResponse>({
    query: findAllBrands,
  });

  return (
    <section className="w-page-width mt-12 mx-auto mb-12 min-h-[500px]">
      <h2 className="text-5xl font-bold text-black-text text-center">
        Featuring the <span className="text-accent">Best Brands</span>
      </h2>
      <h4 className="text-center text-grey-text font-medium mt-3.5">
        Select your preferred brand and explore our exquisite collection.
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 w-full mt-24">
        {data?.findAllBrands
          ?.filter((el) => Number(el.id) <= 8)
          .map((el) => (
            <div key={el.id} className="flex justify-center items-center">
              <Link href={`/guitars/${el.id}`}>
                <Image
                  src={el.image}
                  alt={`${el.name} logo`}
                  width={150}
                  height={50}
                  style={{ height: "auto" }}
                />
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}
