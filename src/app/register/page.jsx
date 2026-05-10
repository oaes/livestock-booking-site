'use client'

import { authClient } from "../../lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField
} from "@heroui/react";

import Link from "next/link";
import { useRouter } from "next/navigation";
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

      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image,
      });

      if (error) {
        console.log(error);
        toast.error(error.message || "Registration failed");
        return;
      }

      toast.success("Register successfully!");

      console.log(data);

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
    <Card className="shadow-md mx-auto md:w-125 py-5 my-8">

      <h1 className="text-center text-2xl font-bold">
        Register
      </h1>

      <Form
        className="flex w-full mx-auto flex-col gap-4"
        onSubmit={onSubmit}
      >

        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="password"
          type="password"
        >
          <Label>Password</Label>

          <Input placeholder="Enter your password" />

          <Description>
            Must be at least 8 characters
          </Description>

          <FieldError />
        </TextField>

        <div className="flex gap-2">

          <Button type="submit">
            <Check />
            Register
          </Button>

          <Button type="reset" variant="secondary">
            Reset
          </Button>

        </div>

      </Form>

      <p className="text-center text-gray-600 mt-2 text-xl">
        Have an account?
        {" "}
        <Link href="/login" className="text-blue-700">
          Login
        </Link>
      </p>

      <p className="text-center text-gray-600">
        OR
      </p>

      <Button
        onClick={handleGoogleSignIn}
        variant="outline"
        className="w-full"
      >
        <GrGoogle />
        Sign in with Google
      </Button>

    </Card>
  );
};

export default RegisterPage;