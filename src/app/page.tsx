'use client';

import { useNewsControllerGetMany } from '@shared/api/generated/news/news';

import styles from './page.module.css';

export default function Home() {
  const { data, isLoading, error } = useNewsControllerGetMany();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const newsList = data?.results ?? [];

  return (
    <div className={styles.page}>
      <h1>News</h1>

      <ul>
        {newsList?.map((news) => (
          <li key={news.id}>{news.title}</li>
        ))}
      </ul>
    </div>
  );
}
