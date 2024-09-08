import React from "react";
import FormAuth from "../../components/FormAuth";
import customAPI from "../../api";

export const action = async ({ request }) => {
  const formInputData = await request.formData();
  const data = Object.fromEntries(formInputData);

  try {
    const response = await customAPI.post("/auth/login", data);
    console.log(response);
    return null;
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    console.log(errorMessage);
    return { errorMessage };
  }
};

const LoginView = () => {
  return (
    <>
      <main>
        <FormAuth />
      </main>
    </>
  );
};

export default LoginView;
