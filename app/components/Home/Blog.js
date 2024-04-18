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
        </section>
    </div>
  )
}

export default Blog