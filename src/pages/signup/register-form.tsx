import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

const formSchema = z.object({
  firstname: z
    .string()
    .min(2, "First name must be at least 2 characters.")
    .max(50),
  lastname: z
    .string()
    .min(2, "Last name must be at least 2 characters.")
    .max(50),
  email: z.string().email("Invalid email format."),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits.")
    .max(15, "Phone number is too long."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      localStorage.setItem("user", JSON.stringify(values));
      navigate("/login");
    }, 2000);

    return () => clearInterval(timer);
  }

  return (
    <Form {...form}>
      <form
        className={cn("flex flex-col gap-6 text-sm", className)}
        {...props}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-[#0e3473]">Register</h1>
          <p className="text-xs text-muted-foreground">
            Let's get you all set up so you can verify your personal account and
            begin setting up your work profile.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-2 gap-y-4">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter first name"
                    className="text-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter last name"
                    className="text-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="m@example.com"
                    className="text-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone No</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    className="text-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Your password"
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
          className="w-full bg-[#1e4e9b] cursor-pointer hover:bg-[#0e3473]"
        >
          {loading ? <LoaderCircle className="animate-spin" /> : "SignUp"}
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
    </Form>
  );
}
