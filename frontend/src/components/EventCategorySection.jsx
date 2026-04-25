import React from 'react';
import styles from './EventCategorySection.module.css';

const categories = [
  {
    name: 'Conferences',
    image: 'https://i.pinimg.com/736x/83/df/1d/83df1d516c0fba80261c19350c2e5a5a.jpg',
  },
  {
    name: 'Weddings',
    image: 'https://i.pinimg.com/736x/dc/62/b5/dc62b547913255a0492b04076012d6b6.jpg',
  },
  {
    name: 'Festivals',
    image: 'https://i.pinimg.com/736x/20/de/f7/20def779217bb918382d8831ef4d0a54.jpg',
  },
  {
    name: 'Parties',
    image: 'https://i.pinimg.com/736x/81/58/82/815882607dcbeb02aee10b2037fb743a.jpg',
  },
];

function EventCategorySection() {
  return (
    <div className={styles.categorySectionContainer}>
      <h2>Event Categories</h2>
      <div className={styles.categoryGrid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryCard}>
            <img
              src={category.image}
              alt={category.name}
              className={styles.categoryImage}
            />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCategorySection;
