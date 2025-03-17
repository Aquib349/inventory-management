import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-[#0e3473]">Login</h1>
        <p className="text-balance text-xs text-muted-foreground">
          Enter your email, password below to login to your account.
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              to="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button
          type="submit"
          className="w-full bg-[#1e4e9b] cursor-pointer hover:bg-[#0e3473]"
        >
          Login
        </Button>
      </div>
      <div className="text-sm">
        Don&apos;t have an account?{" "}
        <Link
          to="/register"
          className="underline underline-offset-4 text-[#0e3473]"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
}
