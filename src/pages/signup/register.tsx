import { GalleryVerticalEnd } from "lucide-react";
import VectorImage from "../../assets/vector.png";
import { SignUpForm } from "./register-form";

export default function SignUpPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-lg">
            <SignUpForm />
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
