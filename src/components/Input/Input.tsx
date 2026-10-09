import {
  useId,
  useState,
  type ComponentPropsWithRef,
  type ReactNode,
} from "react";
import styles from "./Input.module.css";
import { IconAlertTriangleFilled } from "@tabler/icons-react";

type InputTypes = "text" | "email" | "tel" | "url" | "password";

type BaseInputProps = Omit<ComponentPropsWithRef<"input">, "type" | "size"> & {
  label: string;
  hideLabel?: boolean;
  error?: boolean;
  errorMessage?: string;
  description?: string;
  rounded?: boolean;
  size?: "small" | "medium" | "large" | "xlarge";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  endSlot?: ReactNode;
};

type TextInputProps = BaseInputProps & {
  type?: InputTypes;
};

export type InputProps = TextInputProps;

export function Input({
  label,
  type = "text",
  hideLabel = false,
  id,
  className,
  required,
  error,
  errorMessage,
  description,
  endSlot,
  rounded = true,
  size = "large",
  icon,
  iconPosition = "left",
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const descriptionId = `${inputId}-description`;

  const [shownMessage, setShownMessage] = useState(errorMessage);
  if (error && errorMessage !== shownMessage) setShownMessage(errorMessage);

  const wrapperClasses = [
    styles.inputWrapper,
    styles[size],
    rounded && styles.rounded,
    error && styles.error,
    props.disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  const classes = [styles.root, className].filter(Boolean).join(" ");

  const iconElement = icon && (
    <span className={styles.icon} aria-hidden="true">
      {icon}
    </span>
  );

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
    <div className={styles.componentWrapper}>
      <label
        htmlFor={inputId}
        className={hideLabel ? styles.visuallyHidden : styles.label}
      >
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        )}
      </label>

      <div className={wrapperClasses}>
        {iconPosition === "left" && iconElement}
        <input
          {...props}
          id={inputId}
          type={type}
          className={classes}
          required={required}
          aria-invalid={error || undefined}
          aria-describedby={describedBy}
        />
        {iconPosition === "right" && iconElement}
        {endSlot && <div className={styles.endSlot}>{endSlot}</div>}
      </div>
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
                <IconAlertTriangleFilled aria-hidden="true" /> {shownMessage}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
