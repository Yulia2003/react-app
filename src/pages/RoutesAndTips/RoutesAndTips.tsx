import React from 'react';
import styles from './RoutesAndTips.module.css';
import ProductCard from '../../components/ProductCard/ProductCard';


const popularDestinations = [
  {
    title: 'Париж',
    price: 50000,
    imageUrl: '/src/assets/popular/paris.jpg',
  },
  {
    title: 'Токио',
    price: 60000,
    imageUrl: '/src/assets/popular/tokyo.jpg',
  },
  {
    title: 'Нью-Йорк',
    price: 70000,
    imageUrl: '/src/assets/popular/new_york.jpg',
  },
  {
    title: 'Рим',
    price: 55000,
    imageUrl: '/src/assets/popular/rim.jpg',
  },
  {
    title: 'Бали',
    price: 80000,
    imageUrl: '/src/assets/popular/bali.jpg',
  },
  {
    title: 'Пхукет',
    price: 80000,
    imageUrl: '/src/assets/popular/pxycet.jpg',
  },
];

function RoutesAndTips() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Популярные направления</h2>
      <div className={styles.grid}>
        {popularDestinations.map((destination, index) => (
          <ProductCard
            key={index}
            title={destination.title}
            price={destination.price}
            imageUrl={destination.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default RoutesAndTips;