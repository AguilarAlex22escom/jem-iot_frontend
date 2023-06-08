import clsx from "clsx";
import { FC, HTMLProps, ReactNode } from "react";
import styles from '../../styles/components/button.module.scss';

const { button, White, Green, Purple, shadow } = styles;

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  variant?: "White" | "Green" | "Purple";
  withShadow?: boolean;
  children: ReactNode;
}

const variants = {
  ["White"]: White,
  ["Green"]: Green,
  ["Purple"]: Purple,
};

export const Button: FC<ButtonProps> = ({
  variant = "Green",
  withShadow = true,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(button, variants[variant], withShadow && shadow)}
      {...props}
      type="button"
    >
      {children}
    </button>
  );
};