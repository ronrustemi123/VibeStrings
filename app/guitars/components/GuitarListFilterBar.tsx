'use client'

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {Input} from "@/components/ui/input";
import {SearchIcon} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";


export default function GuitarListFilterBar({categoryArr}: {categoryArr: string[]}) {

    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get("q") || "");
    const [category, setCategory] = useState(searchParams.get("category") || "");

    useEffect(() => {
        const handler = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());
            params.set("q", search);
            params.set("page", "1"); // reset page when searching
            params.set('category', category)

            router.push(`?${params.toString()}`, { scroll: false });
        }, 300);

        return () => clearTimeout(handler);
    }, [search, category]);

    return (
        <div className={'flex items-center w-full md:w-1/2 mt-12  gap-6'}>
            <div className={'relative w-1/2 '}>
                <Input type="email" placeholder="Search by name" className={'rounded-none pl-8'} value={search} onChange={e => setSearch(e.target.value)} />
                <SearchIcon size={16}  className={'absolute text-grey-text pointer-events-none top-1/2 -translate-y-1/2 left-2.5'}/>
            </div>
            <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-1/2 rounded-none focus:outline-none">
                    <SelectValue placeholder="Filter By Type" />
                </SelectTrigger>
                <SelectContent >
                    <SelectItem value={'ALL'} >ALL</SelectItem>
                    {categoryArr.map((item) => (
                        <SelectItem value={item} key={item}>{item}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}