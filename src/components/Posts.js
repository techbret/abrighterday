import React, { useEffect, useState } from 'react'
export default function Posts() {
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
    })





    return (
        <div container spacing={2}>
          {posts.map((post, index) => (
          <div key={index}>
            <div>
               <div>
                    <div>{post.yoast_head_json.og_title}</div>
                    
                </div>
            </div>
          </div>
         ))}
        </div>
  )
}
