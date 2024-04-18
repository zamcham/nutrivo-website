import Button from '../Button'
import Image from 'next/image';
const { posts } = require('../../data/posts.js');

function Blog() {
  return (
    <div className="bg-slate-100">
        <section className="flex h-[50vh] p-24 max-w-1440 mx-auto 
        space-x-28 items-center bg-gradient-to-r from-gray-600 to-gray-950 relative
        rounded-t-[50px]">
            <p>Blog</p>
            {posts.map((post) =>(
              <div key={post.title} className="bg-gray-900 min-h-80 w-72 rounded-xl text-white p-2">
                <div className="w-full h-48 relative">
                  <Image
                    src={post.image}
                    alt="blog image"
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    className='rounded-xl'
                  />
                </div>
                <p>{post.title}</p>
                <Button 
                    type="button"
                    title="Read More"
                    variant="green"
                    href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                />
              </div>
            ))}
        </section>
    </div>
  )
}

export default Blog