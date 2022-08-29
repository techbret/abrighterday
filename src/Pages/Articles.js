import { useEffect, useState } from "react"

export default function Articles() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
        const response = await fetch('https://abrighterday.info/wp-json/wp/v2/posts');
        if(!response.ok) {
            console.log('Something went wrong')
            return;
        }
        const posts = await response.json();
        console.log(posts)
        setPosts(posts);
    }
    loadPosts();
}, [])





  return (
    <> 
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
     
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-blue-900 sm:text-4xl">A Brighter Day</h2>
          
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.yoast_head_json.og_title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.yoast_head_json.og_image[0].url} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.link} className="hover:underline">
                      {post.yoast_head_json.og_type}
                    </a>
                  </p>
                  <a href={post.link} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.yoast_head_json.og_title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.yoast_head_json.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.link}>
                      <span className="sr-only">{post.yoast_head_json.author}</span>
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.link} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
