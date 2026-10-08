import { useId, useState, type ComponentPropsWithRef } from "react";
import styles from "./Input.module.css";
import { WarningIcon } from "../../icons/WarningIcon";

type InputTypes = "text" | "email" | "tel" | "url";

type BaseInputProps = Omit<ComponentPropsWithRef<"input">, "type" | "size"> & {
  label: string;
  error?: boolean;
  errorMessage?: string;
  description?: string;
  rounded?: boolean;
  size?: "small" | "medium" | "large" | "xlarge";
};

type TextInputProps = BaseInputProps & {
  type?: InputTypes;
};

export type InputProps = TextInputProps;

export function Input({
  label,
  id,
  className,
  required,
  error,
  errorMessage,
  description,
  rounded = true,
  size = "large",
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
    size && styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const showError = Boolean(error && shownMessage);

  const describedBy =
    [
      description && !showError && descriptionId,
      showError && errorId,
      props["aria-describedby"],
    ]
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
      <input
        {...props}
        id={inputId}
        className={classes}
        required={required}
        aria-invalid={error || undefined}
        aria-describedby={describedBy}
      />
      {(description || shownMessage) && (
        <div
          className={styles.messages}
          data-open={description || showError ? "true" : "false"}
        >
          <div className={styles.messagesInner}>
            {description && (
              <span
                id={descriptionId}
                className={styles.description}
                data-visible={!showError ? "true" : "false"}
              >
                {description}
              </span>
            )}
            {shownMessage && (
              <span
                id={errorId}
                className={styles.errorText}
                data-visible={showError ? "true" : "false"}
              >
                <WarningIcon /> {shownMessage}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
