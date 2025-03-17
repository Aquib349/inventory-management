import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6 text-sm", className)} {...props}>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-[#0e3473]">Register</h1>
        <p className="text-xs text-muted-foreground">
          Let's get you all set up so you can verify your personal account and
          begin setting up your work profile.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-2 gap-y-4">
        <div className="grid gap-2">
          <Label htmlFor="firstname">First Name</Label>
          <Input
            id="firstname"
            type="firstname"
            placeholder="Enter first name"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lastname">Last Name</Label>
          <Input
            id="lastname"
            type="lastname"
            placeholder="Enter last name"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone No</Label>
          <Input id="phone" type="phone" placeholder="Phone number" required />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Your password"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-[#1e4e9b] cursor-pointer hover:bg-[#0e3473]"
      >
        SignUp
      </Button>
      <div className="flex justify-between items-center px-2">
        <Link to="#" className="text-sm underline-offset-4 hover:underline">
          Forgot your password?
        </Link>
        <div className="text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="underline underline-offset-4 text-[#0e3473]"
          >
            Login
          </Link>
        </div>
      </div>
    </form>
  );
}
