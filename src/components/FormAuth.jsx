import React from "react";
import { Form, Link } from "react-router-dom";
import FormInput from "./Form/FormInput";

const FormAuth = ({ isRegister }) => {
  return (
    <div className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-xl flex flex-col gap-y-4"
      >
        <h1 className="text-3xl font-bold">
          {isRegister ? "Register" : "Login"}
        </h1>
        {isRegister && (
          <FormInput
            type="name"
            name="name"
            label="username"
            placeholder="name"
          />
        )}
        <FormInput
          type="email"
          name="email"
          label="email"
          placeholder="email"
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
        />
        <div className="mt-4">
          <button type="submit" className="btn btn-primary btn-block">
            {isRegister ? "Register" : "Login"}
          </button>
        </div>
        {isRegister ? (
          <p className="text-center">
            Already have an account?
            <Link to="/login" className="link link-hover link-primary">
              Sign In
            </Link>
          </p>
        ) : (
          <p className="text-center">
            Don't have an account?
            <Link to="/register" className="link link-hover link-primary">
              Register
            </Link>
          </p>
        )}
      </Form>
    </div>
  );
};

export default FormAuth;
