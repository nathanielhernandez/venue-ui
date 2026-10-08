import { useId, useState, type ComponentPropsWithRef } from "react";
import styles from "./Input.module.css";
import { IoWarningSharp } from "react-icons/io5";

export type InputProps = ComponentPropsWithRef<"input"> & {
  /** Label for text input, e.g. "Name" */
  label: string;
  error?: boolean;
  errorMessage?: string;
  description?: string;
  rounded?: boolean;
};

export function Input({
  label,
  id,
  className,
  required,
  error,
  errorMessage,
  description,
  rounded = true,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const descriptionId = `${inputId}-description`;

  const [shownMessage, setShownMessage] = useState(errorMessage);
  if (error && errorMessage !== shownMessage) setShownMessage(errorMessage);

  const classes = [
    styles.root,
    error && styles.error,
    rounded && styles.rounded,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const describedBy =
    [description && descriptionId, error && errorId, props["aria-describedby"]]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        )}
      </label>
      <div className={styles.helpWrapper}>
        <input
          {...props}
          id={inputId}
          className={classes}
          required={required}
          aria-invalid={error || undefined}
          aria-describedby={describedBy}
        />
        {description && (
          <span id={descriptionId} className={styles.description}>
            {description}
          </span>
        )}
        <span
          id={errorId}
          className={styles.errorText}
          data-visible={error ? "true" : "false"}
        >
          <IoWarningSharp aria-hidden="true" /> {shownMessage}
        </span>
      </div>
    </div>
  );
}
