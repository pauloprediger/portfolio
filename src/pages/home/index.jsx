import styles from './Home.module.css';
import posts from '@/json/posts.json'
import PostCard from '@/components/PostCard';

export default function Home() {
  return (
    <main>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key = {post.id}>
              <PostCard post = {post}/>
          </li>
        ))}
      </ul>
    </main>
  );
}
