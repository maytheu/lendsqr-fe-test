import { loginFormSchema } from "@/lib/utils";
import React from "react";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { FormControl, FormField, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

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
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-Item">
          <div className="flex flex-col w-full">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default LoginFormInput;
