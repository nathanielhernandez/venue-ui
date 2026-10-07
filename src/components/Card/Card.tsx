import { type HTMLAttributes } from "react";
import styles from "./Card.module.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: string;
  padding: number;
}

export function Card({ header, className, ...props }: CardProps) {
  const cardClasses = [styles.root, className].filter(Boolean).join(" ");
  return (
    <div className={cardClasses} {...props}>
      {header && <h2>{header}</h2>}Test
    </div>
  );
}
