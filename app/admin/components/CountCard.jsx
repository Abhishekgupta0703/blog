"use client"

import useCollectionCount from "@/lib/firebase/count"

export default function CountCard({ path, name, icon }) {
    const { data, isLoading, error } = useCollectionCount({ path: path })
    if (isLoading) {
        return <h2>Loading ...</h2>
    }
    if (error) {
        return <p>{error}</p>
    }
    return <div className="flex gap-3 bg-gray-50 items-center rounded pr-8 pl-6 py-2">
        {icon}
        <div>
            <h1 className="font-bold">{name}</h1>
            <h2 className="text-xl font-bold">{data}</h2>
        </div>
    </div>
}