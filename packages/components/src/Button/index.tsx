import { clsx } from 'clsx';
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

const Button = ({
  className,
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return <button className={clsx('button-wow', className)} {...props} />;
};

export default Button;
