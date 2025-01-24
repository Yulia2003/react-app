import React from 'react';
import styles from '/src/pages/RoutesAndTips/RoutesAndTips.module.css';

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.title}>{title}</div>
      <div className={styles.price}>{price} ₽</div>
    </div>
  );
};

export default ProductCard;