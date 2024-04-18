import Link from 'next/link';
import { posts } from '../data/posts.js';

export default function BlogIndex() {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.title}>
            <Link
              href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}