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
import { LoaderCircle } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

const loginSchema = z.object({
  userId: z
    .string()
    .min(3, { message: "Username must be of atleast 3 characters" }),
  userPassword: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  // const { loading, login } = useAuth();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userId: "",
      userPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    // login(values);
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
            name="userId"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="userId">Username</Label>
                <FormControl>
                  <Input
                    id="userId"
                    type="text"
                    className="text-sm"
                    placeholder="abcd4tej"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="userPassword"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <Label htmlFor="userPassword">Password</Label>
                  <Link
                    to="#"
                    className="text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <FormControl>
                  <Input
                    id="userPassword"
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
            {/* {loading ? <LoaderCircle className="animate-spin" /> : "Login"} */}
          </Button>
        </div>

        {/* <div className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="underline underline-offset-4 text-[#0e3473]"
          >
            Sign up
          </Link>
        </div> */}
      </form>
    </Form>
  );
}
