import { getAuthor } from "@/lib/firebase/author/read_server";
import { getCategory } from "@/lib/firebase/category/read_server";
import { getPost } from "@/lib/firebase/post/read_server";
import "./blog.css";

export async function generateMetadata({ params }) {
    const { postId } = params;
    const post = await getPost(postId)

    return {
        title: post?.title,
        openGraph: {
            images: [post?.imageURL],
        },
    }
}

export default async function Page({ params }) {
    const { postId } = params;
    const post = await getPost(postId)
    return <main className="flex justify-center ">
        <section className="flex flex-col gap-5 px-4 py-10 max-w-[800px]">
            <CategoryCard categoryId={post?.categoryId} />
            <h1 className="text-2xl font-bold text-white text-justify">{post?.title}</h1>
            <img className="w-full object-cover" src={post?.imageURL} alt="" />
            <div className="flex justify-between items-center">
                <AuthorCard authorId={post?.authorId} />
                <h5 className="text-xs text-gray-400">{post?.timestamp?.toDate()?.toLocaleDateString()}</h5>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post?.content }}></div>
        </section>
    </main>
}

async function AuthorCard({ authorId }) {
    const author = await getAuthor(authorId);
    return <div className="flex gap-2 items-center">
        <img className="h-10 w-10 rounded-full object-cover bg-yellow-300 p-1" src={author?.photoURL} alt="" />
        <h4 className="text-sm text-gray-300">{author?.name}</h4>
    </div>
}

async function CategoryCard({ categoryId }) {
    const category = await getCategory(categoryId);
    return <div className="flex">
        <div className="flex gap-2 items-center bg-gray-400 bg-opacity-60 rounded-full px-2 py-1 border">
            <img className="h-4 w-4 rounded-full object-cover" src={category?.iconURL} alt="" />
            <h4 className="text-xs text-green-300">{category?.name}</h4>
        </div>
    </div>
}