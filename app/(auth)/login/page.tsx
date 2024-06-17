import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="grid grid-cols-1 h-screen lg:grid-cols-2">
      <div className="hidden lg:flex-center">
        <Image width={100} height={32} alt="logo" src='/icons/logo.svg'/>
      </div>
      <div className="flex-center">form</div>
    </div>
  );
};

export default Login;
