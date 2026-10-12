import {
  createContext,
  useContext,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import styles from "./Card.module.css";
import { Heading, type HeadingProps } from "../Heading";

type CardSize = "small" | "medium" | "large" | "xlarge";

const cx = (...classes: (string | false | undefined)[]) =>
  classes.filter(Boolean).join(" ");

/* ROOT */

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Space between the card's border and its content */
  padding?: "small" | "medium" | "large";
}

export function CardRoot({
  padding = "medium",
  className,
  ...props
}: CardProps) {
  return (
    <div className={cx(styles.root, styles[padding], className)} {...props} />
  );
}

/* HEADER */

const HeaderSizeContext = createContext<CardSize>("medium");

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets the size of the title and icon in this header */
  size?: CardSize;
}

export function CardHeader({
  size = "medium",
  className,
  ...props
}: CardHeaderProps) {
  return (
    <HeaderSizeContext.Provider value={size}>
      <div
        className={cx(
          styles.headerContainer,
          styles[`${size}Header`],
          className,
        )}
        {...props}
      />
    </HeaderSizeContext.Provider>
  );
}

export type CardTitleProps = HeadingProps;

export function CardTitle({ size, ...props }: CardTitleProps) {
  const headerSize = useContext(HeaderSizeContext);
  return <Heading size={size ?? headerSize} {...props} />;
}

export interface CardIconProps extends HTMLAttributes<HTMLSpanElement> {
  /** Decorative icon shown before the title; sized to match it */
  children: ReactNode;
}

export function CardIcon({ className, ...props }: CardIconProps) {
  return (
    <span
      className={cx(styles.icon, className)}
      aria-hidden="true"
      {...props}
    />
  );
}

/* BODY */

export type CardBodyProps = HTMLAttributes<HTMLDivElement>;

export function CardBody({ className, ...props }: CardBodyProps) {
  return <div className={cx(styles.cardBody, className)} {...props} />;
}

/* FOOTER */

export type CardFooterProps = HTMLAttributes<HTMLDivElement>;

export function CardFooter({ className, ...props }: CardFooterProps) {
  return <div className={cx(styles.footer, className)} {...props} />;
}

/* EXPORT */

CardRoot.displayName = "Card";
CardHeader.displayName = "Card.Header";
CardTitle.displayName = "Card.Title";
CardIcon.displayName = "Card.Icon";
CardBody.displayName = "Card.Body";
CardFooter.displayName = "Card.Footer";

// eslint-disable-next-line react-refresh/only-export-components
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Icon: CardIcon,
  Body: CardBody,
  Footer: CardFooter,
});
