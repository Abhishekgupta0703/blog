import { Gauge, LayoutList, StickyNote, User } from "lucide-react"
import Link from 'next/link';
export default function Sidebar() {
    const link = [
        {
            name: 'Dashboard',
            link: '/admin',
            icon: <Gauge />,

        },
        {
            name: 'Posts',
            link: '/admin/posts',
            icon: <StickyNote />,
        },
        {
            name: 'Categories',
            link: '/admin/categories',
            icon: <LayoutList />,
        },
        {
            name: 'Authors',
            link: '/admin/authors',
            icon: <User />,
        },


    ]
    return <section className='w-[200px] border-r h-screen py-6 px-2 text-gray-200'>
        <ul className='w-full flex flex-col gap-2'>
            {link.map((item) => {
                return <Link href={item.link} key={item.name}><li className='flex gap-2 font-bold items-center bg-slate-600 rounded-xl px-5 py-3'>
                        {item.icon}
                        <span className=''>{item.name}</span>
                    </li>
                </Link>
            })}
        </ul>
    </section>
}