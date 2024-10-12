import CountCard from "./components/CountCard";
import { StickyNote, UserRound, List, LayoutList } from 'lucide-react'

export default function Page() {
    return <main className="p-6">
        <div className="flex gap-4">
            <CountCard name={'Posts'} path={'posts'} icon={<StickyNote className="size-14"/>} />
            <CountCard name={'Authors'} path={'authors'} icon={<UserRound className="size-14"/>} />
            <CountCard name={'Categories'} path={'categories'} icon={<LayoutList className="size-12"/>} />
        </div>
    </main>
}