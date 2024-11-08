import React from 'react';
import cn from 'classnames';
import './index.scss';

function Button({ variant = 'primary', size = 'sm', fullwidth, className, children, ...rest }) {
  const buttonClasses = [
    'a-button',
    `a-button--${variant}`,
    `a-button--${size}`,
    fullwidth ? 'a-button--fullwidth' : null,
  ];

  return (
    <button className={cn(className, buttonClasses.join(' '))} {...rest}>
      {children || 'Добавить'}
    </button>
  );
}

export default Button;
