import { useEffect, useState } from "react"


  
  export default function ArticlesBanner() {
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
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">The <span className="text-blue-900">Mental Wellness</span> Center</h2>
            <p className="mt-3 max-w-2xl mx-auto text-3xl text-blue-900 sm:mt-4">
              Tips for a Happy & Balanced Emotional Life
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.slice(0, 3).map((post, index) => (
              <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
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
                      <p className="mt-3 text-base text-gray-500">{post.yoast_head_json.og_description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.link}>
                        <span className="sr-only">{post.author.name}</span>
                        
                      </a>
                    </div>
                    <div className="ml-3">
                      
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <p>Est. Reading Time: {post.yoast_head_json.twitter_misc["Est. reading time"]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
           
          </div>
          <div className="text-center mt-12">
          <button
        type="button"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-500 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
      >
        More Articles
      </button>
            </div>
          
        </div>
      </div>
    )
  }
  