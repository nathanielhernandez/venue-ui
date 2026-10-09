import { useState } from "react";
import { Input, type InputProps } from "../Input";
import { EyeIcon } from "../../icons/EyeIcon";
import { Button } from "../Button";

export interface PasswordInputProps extends Omit<InputProps, "type"> {
  showPasswordObscureOption?: boolean;
}

export function PasswordInput({
  label = "Password",
  size = "large",
  showPasswordObscureOption = true,
  ...props
}: PasswordInputProps) {
  const [showHidePassword, setShowHidePassword] = useState(false);

  return (
    <>
      <Input
        size={size}
        type={showHidePassword ? "text" : "password"}
        autoComplete="current-password"
        label={label}
        endSlot={
          showPasswordObscureOption && (
            <Button
              variant="ghost"
              size={size}
              onClick={() => setShowHidePassword((prev) => !prev)}
              aria-label={showHidePassword ? "Hide password" : "Show password"}
              icon={<EyeIcon state={showHidePassword ? "open" : "closed"} />}
            />
          )
        }
        {...props}
      />
    </>
  );
}
