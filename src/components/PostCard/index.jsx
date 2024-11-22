import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';
import imagens from '@/utils/images'
import React from 'react';
import BotaoPrincipal from '@/components/BotaoPrincipal';

export default function PostCard({ post }) {
  const fotoCapa = imagens[`/src/assets/posts/${post.id}/capa.png`]?.default;

  return (
    <Link to={`/post/${post.id}`}>
      <div className={styles.post}>
        {fotoCapa && (
          <img
            className={styles.post}
            src={fotoCapa}
            alt={`Capa do post ${post.titulo}`}
          />
        )}
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
  );
}
