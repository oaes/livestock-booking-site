"use client";

import { authClient } from "../../lib/auth-client";

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  FiUser,
  FiMail,
  FiLock,
  FiImage,
} from "react-icons/fi";

import { GrGoogle } from "react-icons/gr";

import { toast } from "react-toastify";

const RegisterPage = () => {

  const router = useRouter();

  const onSubmit = async (e) => {

    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image.value;

    try {

      const { error } = await authClient.signUp.email({
        name,
        email,
        password,
        image,
      });

      if (error) {
        toast.error(error.message || "Registration failed");
        return;
      }

      toast.success("Account created successfully!");
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

    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-10">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>

      <Card className="relative w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">

        <div className="p-8">

          {/* Header */}

          <div className="text-center mb-8">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-4">
              K
            </div>

            <h1 className="text-4xl font-bold text-white">
              Create Account
            </h1>

            <p className="text-gray-400 mt-2">
              Join and start your journey today
            </p>

          </div>

          {/* Form */}

          <Form
            onSubmit={onSubmit}
            className="flex flex-col gap-5"
          >

            <TextField
              isRequired
              name="name"
              type="text"
              className="w-full"
            >

              <Label className="text-gray-200">
                Full Name: 
              </Label>

              <Input
                placeholder= "John Doe"
                startContent={
                  <FiUser className="text-gray-400" />
                }
                className="text-white"
              />

              <FieldError />

            </TextField>

            <TextField
              isRequired
              name="image"
              type="text"
              className="w-full"
            >

              <Label className="text-gray-200">
                Profile Image: 
              </Label>

              <Input
                placeholder="https://example.com"
                startContent={
                  <FiImage className="text-gray-400" />
                }
                className="text-white"
              />

              <FieldError />

            </TextField>

            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full"
            >

              <Label className="text-gray-200">
                Email: 
              </Label>

              <Input
                placeholder="john@example.com"
                startContent={
                  <FiMail className="text-gray-400" />
                }
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

              <Label className="text-gray-200">
                Password: 
              </Label>

              <Input
                placeholder="Enter your password"
                startContent={
                  <FiLock className="text-gray-400" />
                }
                className="text-white"
              />

              <Description className="text-xs text-gray-500">
                Must be at least 8 characters
              </Description>

              <FieldError />

            </TextField>

            <Button
              type="submit"
              className="w-full h-12 mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Create Account
            </Button>

          </Form>

          {/* Divider */}

          <div className="flex items-center gap-3 my-6">

            <div className="flex-1 h-px bg-gray-700"></div>

            <span className="text-gray-500 text-sm">
              OR CONTINUE WITH
            </span>

            <div className="flex-1 h-px bg-gray-700"></div>

          </div>

          {/* Google Button */}

          <Button
  onClick={handleGoogleSignIn}
  className="w-full h-12 bg-white hover:bg-gray-100 text-black rounded-xl font-medium flex items-center justify-center gap-3"
>
  <GrGoogle className="text-xl shrink-0" />

  <span>
    Sign up with Google
  </span>
</Button>

          {/* Footer */}

          <p className="text-center text-gray-400 mt-8">

            Already have an account?

            <Link
              href="/login"
              className="text-blue-400 hover:text-blue-300 ml-2 font-semibold"
            >
              Login
            </Link>

          </p>

        </div>

      </Card>

    </div>

  );
};

export default RegisterPage;