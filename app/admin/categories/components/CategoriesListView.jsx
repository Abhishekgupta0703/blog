"use client"

import { useCategories } from "@/lib/firebase/category/read"
import Link from "next/link"

export default function CategoriesListView() {
    const { data, error, isLoading } = useCategories();
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    if (!data) {
        return <h1>Data not found!</h1>
    }
    return <section>
        <table className="w-full">
            <thead>
                <tr>
                    <th className="border px-4 py-2 bg-blue-900">Sr.</th>
                    <th className="border px-4 py-2 bg-blue-900">Icon</th>
                    <th className="border px-4 py-2 bg-blue-900">Name</th>
                    <th className="border px-4 py-2 bg-blue-900">Slug</th>
                    <th className="border px-4 py-2 bg-blue-900">Action</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item, key) => {
                    return <tr className="text-center">
                        <td className="border px-4 py-2">{key + 1}.</td>
                        <td className="border px-4 py-2"> <img className="h-10 mx-auto" src={item?.iconURL} alt="" /> </td>
                        <td className="border px-4 py-2">{item?.name}</td>
                        <td className="border px-4 py-2">{item?.slug}</td>
                        <td className="border px-4 py-2">
                            <Link href={`/admin/categories/form?id=${item?.id}`}>
                                <button className="bg-blue-500 text-white rounded-full px-5 py-2 text-sm">Action</button>
                            </Link>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </section>
}