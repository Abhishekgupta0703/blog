import { Home, LayoutList, MessageCircle } from 'lucide-react'
import LoginButton from './LoginButton'
import AuthContextProvider from '@/lib/contexts/AuthContext'
import Link from 'next/link';

export default function Header() {
    return <nav className="flex justify-between items-center px-7 py-3 border-b bg-slate-950 sticky top-0">
        <Link href={'/'}>
            {/* <img className="h-10" src="/logo.png" alt="" /> */}
            <h1 className="text-3xl text-gray-50 font-extrabold">tech Blog</h1>

        </Link>
        <ul className="flex gap-1 items-center text-white">
            <Link href={'/'}>
                <li className='flex items-center gap-2 py-3 pr-5 pl-3 rounded-md bg-gray-800 hover:bg-slate-700'>
                    <Home />
                    Home
                </li>
            </Link>
            <Link href={'/categories'}>
                <li className='flex items-center gap-2 py-3 pr-5 pl-3 rounded-md bg-gray-800 hover:bg-slate-700'>
                    <LayoutList />
                    Categories
                </li>
            </Link>
            <Link href={'/'}>
                <li className='flex items-center gap-2 py-3 pr-5 pl-3 rounded-md bg-gray-800 hover:bg-slate-700'>
                    <MessageCircle />
                    Contact Us
                </li>
            </Link>
        </ul>
        <AuthContextProvider>
            <LoginButton />
        </AuthContextProvider>
    </nav>
}