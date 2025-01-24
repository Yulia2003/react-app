import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>Наша миссия</h3>
          <p>
            Наша миссия - предоставить вам лучшие туристические маршруты и советы для незабываемых путешествий. Мы стремимся сделать каждое ваше путешествие комфортным и интересным.
          </p>
        </div>
        <div className={styles.section}>
          <h3>Наша команда</h3>
          <p>
            Мы - команда опытных путешественников, которые объехали весь мир. Наши советы и рекомендации основаны на личном опыте и тщательном исследовании.
          </p>
          <img src="/src/assets/company/company.jpg" />
        </div>
        <div className={styles.section}>
          <h3>Контактная информация</h3>
          <p>
            Если у вас есть вопросы или предложения, свяжитесь с нами по электронной почте: sergeeva684p@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;