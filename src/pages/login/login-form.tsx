"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Link } from "react-router";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
// import { useAuth } from "@/hooks/use-auth";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [loading, setLoading] = useState<boolean>(false);
  // const { login } = useAuth();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      // login({ data: values });
    }, 2000);

    return () => clearInterval(timer);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-4", className)}
        {...props}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-[#0e3473]">Login</h1>
          <p className="text-xs text-muted-foreground">
            Enter your email, password below to login to your account.
          </p>
        </div>
        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="email">Email</Label>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    className="text-sm"
                    placeholder="m@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="#"
                    className="text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <FormControl>
                  <Input
                    id="password"
                    type="password"
                    className="text-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#1e4e9b] hover:bg-[#0e3473]"
          >
            {loading ? <LoaderCircle className="animate-spin" /> : "Login"}
          </Button>
        </div>

        <div className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="underline underline-offset-4 text-[#0e3473]"
          >
            Sign up
          </Link>
        </div>
      </form>
    </Form>
  );
}
