import { type HTMLAttributes, type ReactNode } from "react";
import styles from "./Card.module.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode;
  headerSize?: "small" | "medium" | "large" | "xlarge";
  /** Heading level for the header; pick the one that fits the page outline */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  leadingVisual?: ReactNode;
  padding?: "small" | "medium" | "large";
  footer?: ReactNode;
}

export function Card({
  header,
  headerSize = "medium",
  headingLevel = 2,
  leadingVisual,
  children,
  footer,
  padding = "medium",
  className,
  ...props
}: CardProps) {
  const Heading = `h${headingLevel}` as const;
  const cardClasses = [styles.root, styles[padding], className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cardClasses} {...props}>
      {(leadingVisual || header) && (
        <div
          className={[
            styles.headerContainer,
            styles[headerSize + "Header"],
          ].join(" ")}
        >
          {leadingVisual && (
            <span className={styles.icon} aria-hidden="true">
              {leadingVisual}
            </span>
          )}

          <Heading className={styles.header}>{header}</Heading>
        </div>
      )}
      <div className={styles.cardBody}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}
