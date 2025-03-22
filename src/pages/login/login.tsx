import { LoginForm } from "./login-form";
import VectorImage from "../../assets/vector.png";
import Logo from "../../assets/swiss-military.jpeg";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex gap-2 md:justify-start">
          <div className="flex items-center text-sm gap-2 font-bold uppercase">
            <div className="flex aspect-square size-10 items-center justify-center rounded-lg text-sidebar-primary-foreground">
              <img
                src={Logo}
                alt="Company Logo"
                className="w-10 h-10 object-cover rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <img
          src={VectorImage}
          alt="Image"
          className="absolute inset-0 h-full w-full object-fill"
        />
      </div>
    </div>
  );
}
