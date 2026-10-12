import { useState } from "react";
import { Input, type InputProps } from "../Input";
import { Button } from "../Button";

import { IconEye, IconEyeOff } from "@tabler/icons-react";

export interface PasswordInputProps extends Omit<InputProps, "type" | "label"> {
  label?: string;
  showPasswordObscureOption?: boolean;
}

export function PasswordInput({
  label = "Password",
  size = "medium",
  showPasswordObscureOption = true,
  ...props
}: PasswordInputProps) {
  const [showHidePassword, setShowHidePassword] = useState(false);

  return (
    <Input
      size={size}
      type={showHidePassword ? "text" : "password"}
      autoComplete="current-password"
      label={label}
      trailingAction={
        showPasswordObscureOption && (
          <Button
            disabled={props.disabled}
            variant="ghost"
            size={size}
            onClick={() => setShowHidePassword((prev) => !prev)}
            aria-label={showHidePassword ? "Hide password" : "Show password"}
            icon={showHidePassword ? <IconEyeOff /> : <IconEye />}
          />
        )
      }
      {...props}
    />
  );
}
