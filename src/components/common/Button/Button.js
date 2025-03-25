import React from 'react';
import './button.scss';

const Button = ({ onClick, caption, as: Component = 'button', href, target, rel, ...rest }) => {
    return (
      <Component
        onClick={onClick}
        href={href} // Обязательно передаем href
        target={target} // Передаем target
        rel={rel} // Передаем rel для безопасности
        className='btn'
        {...rest}
      >
        {caption}
      </Component>
    );
  };

export default Button;