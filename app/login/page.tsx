import { Metadata } from "next";

import React from "react";
import LoginPage from "./components/LoginPage";
// const LoginPage = dynamic(() => import("./components/LoginPage"), {
//   ssr: false,
//   loading: () => <div>Loading...</div>,
// });
export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account | Web",
};

const page = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default page;
