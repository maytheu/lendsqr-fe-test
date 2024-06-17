"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import { loginFormSchema } from "@/lib/utils";
import LoginFormInput from "@/components/LoginFormInput";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import Link from "next/link";
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loginFormValues = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  }

  return (
    <div className="grid grid-cols-1 h-screen lg:grid-cols-2">
      <div className="hidden lg:flex-center">
        <div className="flex flex-col">
          <Image
            width={100}
            height={32}
            alt="logo"
            src="/icons/logo.svg"
            className="pb-32 ml-8"
          />
          <Image width={500} height={100} alt="home" src="/icons/login.svg" />
        </div>
      </div>
      <div className="flex-center size-full max-sm:px-6">
        <div className="flex flex-col w-full max-w-[400px]">
          <h1 className="text-primary-400 font-extrabold text-4xl pb-3.5">
            Welcome!
          </h1>
          <p className="text-primary-100 text-1">Enter details to login.</p>
          <div className=" mt-12">
            <Form {...loginFormValues}>
              <form
                onSubmit={loginFormValues.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <LoginFormInput
                  control={loginFormValues.control}
                  name="email"
                  placeholder="Email"
                />

                <LoginFormInput
                  control={loginFormValues.control}
                  name="password"
                  placeholder="Password"
                />
                <Link
                  href="/login"
                  className="flex text-12 text-btn uppercase font-semibold"
                >
                  forgot password ?
                </Link>
                <div className="flex flex-col gap-4">
                  <Button
                    type="submit"
                    className="form-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={20} className="animate-spin" /> &nbsp;
                        Loading...
                      </>
                    ) : (
                      "LOG IN"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
