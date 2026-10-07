import { useState } from "react";
import { TextInput, type TextInputProps } from "../TextInput";

export interface PhoneInputProps
  extends Omit<TextInputProps, "type" | "value" | "defaultValue" | "onChange"> {
  /** Digits only, e.g. "5551234567" */
  value?: string;
  /** Digits only, e.g. "5551234567" */
  defaultValue?: string;
  /** Called with digits only, never the formatted text */
  onChange?: (digits: string) => void;
  showIcon?: boolean;
}

const format = (digits: string) => {
  const d = digits.slice(0, 10);
  if (!d) return "";
  if (d.length < 4) return `${d}`;
  if (d.length > 3 && d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
};

const parse = (text: string) => text.replace(/\D/g, "").slice(0, 10);

export function PhoneInput({
  value,
  defaultValue = "",
  onChange,
  name,
  ...props
}: PhoneInputProps) {
  const [internal, setInternal] = useState(defaultValue);
  const digits = value ?? internal;

  return (
    <>
      <TextInput
        {...props}
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        value={format(digits)}
        onChange={(e) => {
          const next = parse(e.target.value);
          setInternal(next);
          onChange?.(next);
        }}
      />
      {name && <input type="hidden" name={name} value={digits} />}
    </>
  );
}
