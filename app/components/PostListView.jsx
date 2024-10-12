import { getAuthor } from "@/lib/firebase/author/read_server";
import { getCategory } from "@/lib/firebase/category/read_server";
import { getAllPosts } from "@/lib/firebase/post/read_server";
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function PostListView() {
    const posts = await getAllPosts();
    if (!posts) {
        return (
            <div className="text-center py-20">
                <h3 className="text-xl font-bold text-gray-500">Posts Not Available!</h3>
            </div>
        );
    }
    return (
        <section className="p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {posts?.map((post, key) => (
                    <PostCard post={post} key={key} />
                ))}
            </div>
        </section>
    );
}

export function PostCard({ post }) {
    return (
        <Link href={`/posts/${post?.id}`}>
            <div className="flex flex-col gap-4 rounded-lg shadow-lg overflow-hidden  bg-slate-700 hover:bg-slate-600 hover:shadow-xl transition-shadow duration-300">
                <div className="relative group">
                    <img
                        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        src={post?.imageURL}
                        alt={post?.title}
                    />
                    <div className="absolute top-3 right-3 flex justify-end">
                        <CategoryCard categoryId={post?.categoryId} />
                    </div>
                </div>
                <div className="p-5 pt-1 flex flex-col gap-3">
                    <h1 className="text-lg font-bold text-gray-100 mb-1">{post?.title}</h1>
                    <div className="flex justify-between items-center">
                        <AuthorCard authorId={post?.authorId} />
                        <h5 className="text-xs text-gray-500">{post?.timestamp?.toDate()?.toLocaleDateString()}</h5>
                    </div>
                </div>
            </div>
        </Link>
    );
}

async function AuthorCard({ authorId }) {
    const author = await getAuthor(authorId);
    return (
        <div className="flex gap-2 items-center">
            <img className="h-10 w-10 rounded-full object-cover bg-yellow-50 p-1" src={author?.photoURL} alt={author?.name} />
            <h4 className="text-sm text-gray-300">{author?.name}</h4>
        </div>
    );
}

async function CategoryCard({ categoryId }) {
    const category = await getCategory(categoryId);
    return (
        <div className="flex items-center bg-gray-600 bg-opacity-80 rounded-full px-3 py-1 border border-gray-300 dark:border-gray-600">
            <img className="h-4 w-4 rounded-full object-cover" src={category?.iconURL} alt={category?.name} />
            <h4 className="ml-2 text-xs text-gray-300">{category?.name}</h4>
        </div>
    );
}
