import React, { useState } from "react";
import { FieldError, FieldErrors, useForm } from "react-hook-form";

// Less code
// Better validation
// Better Errors (set, clear, display)
// Have control over inputs
// Dont deal with events
// Easier inputs

interface LoginForm {
  username: string;
  password: string;
  email: string;
  errors?: string;
}

export default function Forms() {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [formErrors, setFormErrors] = useState("");
  // const [emailError, setEmailError] = useState("");

  // const onUsernameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   setUsername(value);
  // };
  // const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   setEmailError("");
  //   setEmail(value);
  // };
  // const onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   setPassword(value);
  // };
  // const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(email, username, password);
  //   if (username === "" || email === "" || password === "") {
  //     setFormErrors("All fields are required");
  //   }
  //   if (!email.includes("@")) {
  //     setEmailError("email is required");
  //   }
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    setError,
    clearErrors,
  } = useForm<LoginForm>();
  const onValid = (data: LoginForm) => {
    console.log("im valid ");
    setError("errors", { message: "Backed is offline sorry." });
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log("@@@ formState errors 객체 : ", errors);
  };
  console.log("@@@ watch 객체 : ", watch("email"));
  // clearErrors("email");
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "The username should be longer than 5 chars.",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email?.message}
      <input
        {...register("password", {
          required: "Password is required",
        })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
      {errors.errors?.message}
    </form>
  );
}
