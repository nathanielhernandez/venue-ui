import { type HTMLAttributes, type ReactNode } from "react";
import styles from "./Heading.module.css";

type HeadingSize = "small" | "medium" | "large" | "xlarge" | "xxlarge";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: HeadingSize;
}

const defaultSize: Record<1 | 2 | 3 | 4 | 5 | 6, HeadingSize> = {
  1: "xxlarge",
  2: "xlarge",
  3: "large",
  4: "medium",
  5: "small",
  6: "small",
};

export function Heading({
  headingLevel = 2,
  size,
  children,
  className,
  ...props
}: HeadingProps) {
  const Head = `h${headingLevel}` as const;

  const headingClasses = [
    styles.root,
    styles[size ?? defaultSize[headingLevel]],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Head className={headingClasses} {...props}>
      {children}
    </Head>
  );
}
