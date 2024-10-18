// src/components/Button.jsx
import React from 'react';
import './Button.css'; // Подключение стилей для кнопки

function Button({ label, onClick, color = 'blue', size = 'medium' }) {
  return (
    <button
      className={`btn btn-${color} btn-${size}`} // Использование динамических классов
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;