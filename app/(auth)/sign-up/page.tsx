"use client";
import React from "react";
import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validation";

const SignUp = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={() => {}}
  />
);

export default SignUp;