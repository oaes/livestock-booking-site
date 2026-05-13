"use client";

import { authClient } from "../../lib/auth-client";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import { FiLock, FiMail } from "react-icons/fi";
import { toast } from "react-toastify";

const LoginPage = () => {

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {

      const { error } = await authClient.signIn.email({
        email,
        password,
        rememberMe: true,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "Login failed");
        return;
      }

      toast.success("Login successful!");
      router.push("/");

    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  const handleGoogleSignIn = async () => {
    try {

      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

    } catch (err) {
      console.log(err);
      toast.error("Google Sign-In Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">

      <Card className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl">

        <div className="p-8">

          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold text-white">
              Welcome Back
            </h1>

            <p className="text-gray-300 mt-2">
              Login to continue your journey
            </p>

          </div>

          <Form
            onSubmit={onSubmit}
            className="flex flex-col gap-5"
          >

            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full"
            >

              <Label className="text-white">
                Email: 
              </Label>

              <Input
                startContent={<FiMail className="text-gray-400" />}
                placeholder="john@example.com"
                className="text-white"
              />

              <FieldError />

            </TextField>

            <TextField
              isRequired
              name="password"
              type="password"
              className="w-full"
            >

              <Label className="text-white">
                Password: 
              </Label>

              <Input
                startContent={<FiLock className="text-gray-400" />}
                placeholder="Enter your password"
                className="text-white"
              />

              <FieldError />

            </TextField>

            <div className="flex justify-end w-full">

              <Link
                href="/forgot-password"
                className="text-sm text-blue-400 hover:text-blue-300 transition"
              >
                Forgot Password?
              </Link>

            </div>

            <Button
              type="submit"
              className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300"
            >
              Login
            </Button>

          </Form>

          <div className="flex items-center gap-3 my-6">

            <div className="flex-1 h-[1px] bg-gray-700"></div>

            <p className="text-gray-400 text-sm">
              OR CONTINUE WITH
            </p>

            <div className="flex-1 h-[1px] bg-gray-700"></div>

          </div>

       <Button
  onClick={handleGoogleSignIn}
  className="w-full h-12 bg-white hover:bg-gray-100 text-black rounded-xl font-medium flex items-center justify-center gap-3"
>
  <GrGoogle className="text-xl shrink-0" />

  <span>
    Sign up with Google
  </span>
</Button>

          <p className="text-center text-gray-300 mt-8">

            Don&apos;t have an account?

            <Link
              href="/register"
              className="text-blue-400 hover:text-blue-300 ml-2 font-semibold"
            >
              Register
            </Link>

          </p>

        </div>

      </Card>

    </div>
  );
};

export default LoginPage
