import { loginFormSchema } from "@/lib/utils";
import React, { useState } from "react";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { FormControl, FormField, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface LoginFormInputProps {
  name: FieldPath<z.infer<typeof loginFormSchema>>;
  placeholder: string;
  control: Control<z.infer<typeof loginFormSchema>>;
}

const LoginFormInput = ({
  control,
  name,
  placeholder,
}: LoginFormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-Item">
          <div className="flex flex-col w-full">
            <FormControl>
              {name === "password" ? (
                <div className="relative">
                  <Input
                    placeholder={placeholder}
                    className="input-class"
                    type={showPassword ? "text" : "password"}
                    {...field}
                  />
                  <Button
                    className="absolute right-0 top-0 h-full px-3 py-2 text-primary-300"
                    onClick={() => setShowPassword((prev) => !prev)}
                    type="button"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </div>
              ) : (
                <Input
                  placeholder={placeholder}
                  className="input-class"
                  type={"text"}
                  {...field}
                />
              )}
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default LoginFormInput;
