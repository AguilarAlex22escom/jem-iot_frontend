import { FC, ReactNode } from "react";
import clsx from "clsx";
import styles from "../../styles/components/card.module.scss";

const { card, animation, SensorOption, SensorStatus, Temperature, Pulses, Level, Blue, Purple, Green } =
  styles;

interface CardProps {
  variant?: "SensorOption" | "SensorStatus";
  shadow: "Blue" | "Purple" | "Green";
  type?: "Temperature" | "Pulses" | "Level";
  children: ReactNode;
  animation?: HTMLImageElement;
}

const variants = {
  ["SensorOption"]: SensorOption,
  ["SensorStatus"]: SensorStatus
}

const types = {
  ["Temperature"]: Temperature,
  ["Pulses"]: Pulses,
  ["Level"]: Level,
};

const shadows = {
  ["Blue"]: Blue,
  ["Purple"]: Purple,
  ["Green"]: Green,
};



export const Card: FC<CardProps> = ({
  shadow = "Green",
  variant = "SensorOption",
  type = "Temperature",
  children,
  ...props
}) => {
  return (
    <section className={clsx(card, variants[variant], types[type], shadows[shadow])} {...props}>
      <picture className={clsx(animation)}></picture>
      {children}
    </section>
  );
};
