import Button from '../Button'
import Image from 'next/image';
const { posts } = require('../../data/posts.js');

function Blog() {
  return (
    <div className="bg-slate-100 w-full flex items-center justify-center">
        <section 
          className="sm-s:overflow-hidden flex flex-col items-center justify-center 
          h-[60vh] w-full max-w-1440 mx-20 p-10
          bg-gradient-to-r from-gray-600 to-gray-950
          rounded-t-[50px] overflow-hidden relative"
        >
            <div className='bg-slate-100 w-1/2 mx-auto rounded-xl py-3 px-1 text-center -mt-1 absolute top-0'>
              <h3 className='font-semibold text-green-500 text-2xl'>Blog</h3>
            </div>
            <ul className='flex w-full justify-between mt-5'>
              {posts.map((post) =>(
                <li key={post.title}>
                  <div className="bg-gray-900 min-h-80 w-72 rounded-xl text-white p-2 flex flex-col justify-around">
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
                    <p className='text-sm my-1'>{post.title}</p>
                    <Button 
                        type="button"
                        title="Read More"
                        variant="green"
                        href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    />
                  </div>
                </li>
              ))}
            </ul>

        </section>
    </div>
  )
}

export default Blog