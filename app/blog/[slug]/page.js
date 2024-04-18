import { posts } from '../../data/posts.js';

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = posts.find(
    (post) =>
      post.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.title.toLowerCase().replace(/\s+/g, '-'),
    key: post.id.toString(),
  }));
}