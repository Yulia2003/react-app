import React from 'react';
import styles from './Testimonials.module.css';

interface TestimonialProps {
  name: string;
  comment: string;
  avatarUrl?: string; 
}

const testimonials = [
  {
    name: 'Анна Смирнова',
    comment: 'Планирование моей поездки в Париж стало настоящим удовольствием! Удобный интерфейс и много полезной информации.',
    avatarUrl: '/src/assets/reviews/person_icon.png', // Ссылка на иконку
  },
  {
    name: 'Дмитрий Кузнецов',
    comment: 'С помощью этого сайта я быстро нашел лучшие маршруты и отели. Рекомендую всем!',
    avatarUrl: '/src/assets/reviews/person_icon.png', // Ссылка на иконку
  },
  {
    name: 'Елена Павлова',
    comment: 'Я была поражена, насколько легко было спланировать свою поездку в Бали. Спасибо за отличный сервис!',
    avatarUrl: '/src/assets/reviews/person_icon.png', // Ссылка на иконку
  },
];

const Testimonial = ({ name, comment, avatarUrl }: TestimonialProps) => {
  return (
    <div className={styles.testimonial}>
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt={name}
          className={styles.avatar}
        />
      )}
      <div className={styles.testimonialContent}>
        <h4>{name}</h4>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <h2>Отзывы</h2>
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          name={testimonial.name}
          comment={testimonial.comment}
          avatarUrl={testimonial.avatarUrl}
        />
      ))}
    </section>
  );
};

export default Testimonials;